import type { RouteObject } from 'react-router-dom'
import type { IPrivateRoutes } from 'types/router'

export interface ILayoutLoader {
  permissions: string[]
  allSubmenus: RouteObject[]
  mainMenu: IPrivateRoutes[]
}
