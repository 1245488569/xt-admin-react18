import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useNavigation } from 'react-router-dom'
import rootRoutes from './router'
import { searchRouteMeta } from './utils/router'
import { useSysConfigStore } from './stores/config'
import { useUserStore } from './stores/user'
import { usePermissionrStore } from './stores/permission'
import useSystemRouter from './hooks/useSystemRouter'

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

  // const { filterPermissionsRoutes } = useSystemRouter()
  if (useUserStore.getState().token) {
    if (!usePermissionrStore.getState().routes.length) {
      // TODO
      // const res = filterPermissionsRoutes()

      // console.log('Root tsx filterPermissionsRoutes', res)
      // usePermissionrStore.setState({ routes: res })
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
