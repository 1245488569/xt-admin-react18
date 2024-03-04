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

function generateAllSubMenus(noDealMenu: RouteObject[]) {
  const menus: RouteObject[] = []
  for (const item of noDealMenu) {
    if (isEmpty(item.meta) && isEmpty(item.children))
      continue

    if (isEmpty(item.meta) && !isEmpty(item.children)) {
      menus.push(...generateAllSubMenus(item.children!))
      continue
    }

    const obj = {
      ...item,
    }

    if (item.meta?.title && !item.meta.hideInMenu) {
      if (item.path === '/' && !useSysConfigStore.getState().app.enableDashboard)
        continue
      obj.children = []
      obj.onlyKey = item.path || random(0, 10, true).toString()
      menus.push(obj)

      if (!isEmpty(item.children))
        obj.children.push(...generateAllSubMenus(item.children!))
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

function generateAllMainMenu(allSubmenus: RouteObject[]) {
  return privateRoutes.map((v) => {
    return {
      parentIndex: v.parentIndex,
      title: v.title,
      icon: v.icon,
      children: allSubmenus.filter(k => k.parentIndex === v.parentIndex),
    }
  })
}

export default async function LayoutLoader() {
  let permissions: string[] = []
  let allSubmenus: RouteObject[] = []
  let allMainMenu: IPrivateRoutes[] = []
  if (useUserStore.getState().token && useSysConfigStore.getState().app.enablePermission) {
    permissions = await permissionApi()
    const noDealMenu = getNoDealMenu()
    console.log('noDealMenu', noDealMenu)
    allSubmenus = generateAllSubMenus(noDealMenu)
    console.log('allSubmenus', allSubmenus)

    allMainMenu = generateAllMainMenu(allSubmenus)
    console.log('mainMenu', allMainMenu)
  }
  else if (!useUserStore.getState().token) {
    const noDealMenu = getNoDealMenu()
    allSubmenus = generateNoAuthSubMenus(noDealMenu)
    console.log('NoAuthSubMenus', allSubmenus)
  }

  return {
    permissions,
    allSubmenus,
    allMainMenu,
  }
}
