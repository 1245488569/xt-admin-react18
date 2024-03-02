import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useNavigation, useRouteLoaderData } from 'react-router-dom'
import { rootRoutes } from './router'
import { getCatchRouteMeta, searchRoutePath } from './utils/router'
import { useSysConfigStore } from './stores/config'
import { useUserStore } from './stores/user'
import type { ILayoutLoader } from './types/common'
import { message } from './utils/AntdGlobal'

const Root: React.FC = () => {
  console.log('Root tsx')
  const navigation = useNavigation()

  const { t } = useTranslation()
  const { pathname } = useLocation()

  console.log('Root tsx pathname', pathname)
  console.log('Root tsx rootRoutes', rootRoutes)
  const curRouteMeta = getCatchRouteMeta(pathname, rootRoutes)
  console.log('Root tsx curRouteMeta', curRouteMeta)

  if (useSysConfigStore.getState().app.enableProgress) {
    if (navigation.state === 'loading')
      Nprogress.start()
    else
      Nprogress.done()
  }

  document.title = import.meta.env.VITE_APP_TITLE
  if (useSysConfigStore.getState().app.enableDynamicTitle && curRouteMeta?.title)
    document.title = t(curRouteMeta.title)

  // 如果是不在layouty的页面，useRouteLoaderData('layout')是undefined
  const { permissions, allSubmenus } = useRouteLoaderData('layout') as ILayoutLoader || {}
  console.log('Root tsx permissions', permissions)

  if (useUserStore.getState().token) {
    if (pathname === '/login')
      return <Navigate to="/" replace />

    if (!allSubmenus || !allSubmenus.length)
      return <Navigate to="/403" replace />

    if (pathname === '/' && !useSysConfigStore.getState().app.enableDashboard) {
      const path = searchRoutePath(allSubmenus[0])
      if (!path) {
        message.error('路由配置错误，请检查路由配置')
        return <Navigate to="/403" replace />
      }
      return <Navigate to={path} replace />
    }

    if (useSysConfigStore.getState().app.enablePermission) {
      if (curRouteMeta?.auth) {
        if (typeof curRouteMeta.auth === 'string' && !permissions.includes(curRouteMeta.auth))
          return <Navigate to="/403" replace />

        else if (Array.isArray(curRouteMeta.auth) && !curRouteMeta.auth.some(v => permissions.includes(v)))
          return <Navigate to="/403" replace />

        else
          return <Outlet />
      }
      return <Outlet />
    }
    else {
      return <Outlet />
    }
  }
  else {
    if (curRouteMeta?.isWhite)
      return <Outlet />

    else
      return <Navigate to="/login" replace />
  }
}

export default Root
