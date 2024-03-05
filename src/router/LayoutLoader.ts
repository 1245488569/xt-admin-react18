import cloneDeep from 'lodash/cloneDeep'
import type { RouteObject } from 'react-router-dom'
import { isEmpty, random } from 'lodash'
import type { IPrivateRoutes } from 'types/router'
import { privateRoutes } from './private'
import { useUserStore } from '@/stores/user'
import { useSysConfigStore } from '@/stores/config'
import { permissionApi } from '@/api/test'

import { rootRoutes } from '@/router'

function getNoDealMenu() {
  const cloneRootRoutes = cloneDeep(rootRoutes)
  return cloneRootRoutes[0].children?.find(item => item.id === 'layout')?.children || []
}

function generateallSubmenu(noDealMenu: RouteObject[], permissions: string[]) {
  const menus: RouteObject[] = []
  for (const item of noDealMenu) {
    if (isEmpty(item.meta) && isEmpty(item.children))
      continue

    if (isEmpty(item.meta) && !isEmpty(item.children)) {
      menus.push(...generateallSubmenu(item.children!, permissions))
      continue
    }

    const obj = {
      ...item,
    }

    if (item.meta?.title && !item.meta.hideInMenu) {
      if (item.path === '/' && !useSysConfigStore.getState().app.enableDashboard)
        continue
      if (item.meta?.auth) {
        if ((typeof item.meta.auth === 'string' && !permissions.includes(item.meta.auth)) || (Array.isArray(item.meta.auth) && !item.meta.auth.some(v => permissions.includes(v))))
          continue
      }
      obj.children = []
      obj.onlyKey = item.path || random(0, 10, true).toString()
      menus.push(obj)

      if (!isEmpty(item.children))
        obj.children.push(...generateallSubmenu(item.children!, permissions))
    }
  }

  return menus
}

function generateNoAuthSubMenus(noDealMenu: RouteObject[]) {
  const menus: RouteObject[] = []
  for (const item of noDealMenu) {
    if (isEmpty(item.meta) && isEmpty(item.children))
      continue

    if (isEmpty(item.meta) && !isEmpty(item.children)) {
      menus.push(...generateNoAuthSubMenus(item.children!))
      continue
    }

    const obj = {
      ...item,
    }

    if (item.meta?.title && !item.meta.hideInMenu && item.meta.isWhite) {
      obj.children = []
      obj.onlyKey = item.path || random(0, 10, true).toString()

      menus.push(obj)

      if (!isEmpty(item.children))
        obj.children.push(...generateNoAuthSubMenus(item.children!))
    }
  }
  return menus
}

function generateAllMainMenu(allSubmenu: RouteObject[]) {
  return privateRoutes.map((v) => {
    return {
      parentIndex: v.parentIndex,
      title: v.title,
      icon: v.icon,
      children: allSubmenu.filter(k => k.parentIndex === v.parentIndex),
    }
  })
}

export default async function LayoutLoader() {
  let permissions: string[] = []
  let allSubmenu: RouteObject[] = []
  let allMainMenu: IPrivateRoutes[] = []
  if (useUserStore.getState().token && useSysConfigStore.getState().app.enablePermission) {
    permissions = await permissionApi()
    const noDealMenu = getNoDealMenu()
    console.log('noDealMenu', noDealMenu)
    allSubmenu = generateallSubmenu(noDealMenu, permissions)
    console.log('allSubmenu', allSubmenu)

    allMainMenu = generateAllMainMenu(allSubmenu)
    console.log('mainMenu', allMainMenu)
  }
  else if (!useUserStore.getState().token) {
    const noDealMenu = getNoDealMenu()
    allSubmenu = generateNoAuthSubMenus(noDealMenu)
    console.log('NoAuthSubMenus', allSubmenu)
  }

  return {
    permissions,
    allSubmenu,
    allMainMenu,
  }
}
