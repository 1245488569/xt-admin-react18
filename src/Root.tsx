import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useNavigation, useRouteLoaderData } from 'react-router-dom'
import { rootRoutes } from './router'
import { searchRouteMeta } from './utils/router'
import { useSysConfigStore } from './stores/config'
import { useUserStore } from './stores/user'
import type { ILayoutLoader } from './types/common'

const Root: React.FC = () => {
  console.log('Root tsx')
  const navigation = useNavigation()

  const { t } = useTranslation()
  const { pathname } = useLocation()

  console.log('Root tsx pathname', pathname)
  const curRouteMeta = searchRouteMeta(pathname, rootRoutes)
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

  const { permissions } = useRouteLoaderData('layout') as ILayoutLoader
  console.log('Root tsx permissions', permissions)

  if (useUserStore.getState().token) {
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
      if (pathname === '/login') {
        return <Navigate to="/" replace />
      }
      else if (pathname === '/' && !useSysConfigStore.getState().app.enableDashboard) {
        // TODO: 跳转一个菜单项
        return <Outlet />
      }
      else {
        return <Outlet />
      }
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
