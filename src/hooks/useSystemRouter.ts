import type { RouteObject } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import rootRoutes from '@/router'
import privateRoutes from '@/router/private'
import { shallowEqualApp, useAppSelector } from '@/store'

function addPrivateChildrenIndex(privateChildrenRoutes: RouteObject[], parentIndex: number) {
  privateChildrenRoutes.forEach((item) => {
    item.parentIndex = parentIndex
    if (item.children && item.children.length)
      addPrivateChildrenIndex(item.children, item.parentIndex)
  })
}

function addIndexPrivateRoutes() {
  const cloneRoutes = cloneDeep(privateRoutes)
  cloneRoutes.forEach((item, i) => {
    item.parentIndex = i
    if (item.children && item.children.length)
      addPrivateChildrenIndex(item.children, item.parentIndex)
  })
  return cloneRoutes
}

function allPrivateChildrenRoutes() {
  return addIndexPrivateRoutes().map(item => item.children).flat()
}

export default function useSystemRouter() {
  const { enablePermission } = useAppSelector(
    state => ({
      enablePermission: state.config.app.enablePermission,
    }),
    shallowEqualApp,
  )

  function filterPermissionsRoutes(): Promise<RouteObject[]> {
    return new Promise((resolve) => {
      let routes: RouteObject[] = []
      if (enablePermission) {
        // 开启权限功能
      }
      else {
        routes = [...rootRoutes, ...allPrivateChildrenRoutes()]
      }

      resolve(routes)
    })
  }

  return {
    filterPermissionsRoutes,
  }
}
