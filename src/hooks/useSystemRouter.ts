import type { RouteObject } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import privateRoutes from '@/router/private'
import { useSysConfigStore } from '@/stores/config'

function addPrivateChildrenIndex(privateChildrenRoutes: RouteObject[], parentIndex: number) {
  privateChildrenRoutes.forEach((item) => {
    item.parentIndex = parentIndex
    if (item.children?.length)
      addPrivateChildrenIndex(item.children, item.parentIndex)
  })
}

function addIndexPrivateRoutes() {
  const cloneRoutes = cloneDeep(privateRoutes)
  cloneRoutes.forEach((item, i) => {
    item.parentIndex = i
    if (item.children?.length)
      addPrivateChildrenIndex(item.children, item.parentIndex)
  })
  return cloneRoutes
}

function allPrivateChildrenRoutes() {
  return addIndexPrivateRoutes().map(item => item.children).flat()
}

export default function useSystemRouter() {
  function filterPermissionsRoutes(): RouteObject[] {
    // return new Promise((resolve) => {
    //   let routes: RouteObject[] = []
    //   if (useSysConfigStore.getState().app.enablePermission) {
    //     // 开启权限功能
    //   }
    //   else {
    //     routes = [...allPrivateChildrenRoutes()]
    //   }

    //   resolve(routes)
    // })

    let routes: RouteObject[] = []
    if (useSysConfigStore.getState().app.enablePermission) {
      // 开启权限功能
    }
    else {
      routes = [...allPrivateChildrenRoutes()]
    }
    return routes
  }

  return {
    filterPermissionsRoutes,
  }
}
