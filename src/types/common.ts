import type { RouteObject } from 'react-router-dom'
import type { IPrivateRoutes } from 'types/router'

export interface ILayoutLoader {
  permissions: string[]
  allSubmenu: RouteObject[]
  allMainMenu: IPrivateRoutes[]
}
