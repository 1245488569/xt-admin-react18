import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useNavigation } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import rootRoutes from './router'
import { searchRoute } from './utils/router'
import { useSysConfigStore } from './stores/config'

export function Component() {
  console.log('Root tsx')
  const navigation = useNavigation()

  const { t } = useTranslation()
  const { pathname } = useLocation()

  console.log('Root tsx pathname', pathname)

  const { enableProgress, enableDynamicTitle } = useSysConfigStore(useShallow(state => ({
    enableProgress: state.app.enableProgress,
    enableDynamicTitle: state.app.enableDynamicTitle,
  })))

  useEffect(() => {
    if (enableProgress) {
      if (navigation.state === 'loading')
        Nprogress.start()
      else
        Nprogress.done()
    }
  }, [enableProgress, navigation.state])

  useEffect(() => {
    console.log('Root useEffect')
    const toRoute = searchRoute(pathname, rootRoutes)
    console.log('Root tsx toRoute', toRoute, enableDynamicTitle)
    document.title = import.meta.env.VITE_APP_TITLE
    if (enableDynamicTitle && toRoute.meta?.title)
      document.title = t(toRoute.meta.title)
  }, [enableDynamicTitle, pathname, t])

  return <Outlet />
}
