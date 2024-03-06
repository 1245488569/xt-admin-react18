import type { RouteObject } from 'react-router-dom'
import type { IPrivateRoutes, RouteMeta } from 'types/router'

export interface ILayoutLoader {
  permissions: string[]
  allSubMenu: RouteObject[]
  allMainMenu: IPrivateRoutes[]
}

export interface ITabbarItem {
  pathname: string
  search: string
  state: any | null
  meta: RouteMeta
}
export type ITabbarRemoveType = 'self' | 'otherOnce' | 'right' | 'left' | 'otherAll'
