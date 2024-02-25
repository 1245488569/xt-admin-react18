import { Fragment } from 'react'
import rootRoutes from '.'
import { searchRoute } from '@/utils/router'
import { shallowEqualApp, useAppSelector } from '@/store'

// interface IProps {
//   children: React.ReactNode
// }

const RouterGuard: React.FC = () => {
  console.log('RouterGuard tsx')
  const { t } = useTranslation()
  const { pathname } = useLocation()

  console.log('RouterGuard tsx pathname', pathname)

  const { enableDynamicTitle } = useAppSelector(
    state => ({
      enableDynamicTitle: state.config.app.enableDynamicTitle,
      token: state.user.token,
    }),
    shallowEqualApp,
  )

  useEffect(() => {
    console.log('RouterGuard useEffect')
    const toRoute = searchRoute(pathname, rootRoutes)
    console.log('RouterGuard tsx toRoute', toRoute)
    document.title = import.meta.env.VITE_APP_TITLE
    if (enableDynamicTitle && toRoute.meta?.title)
      document.title = t(toRoute.meta.title)
  }, [enableDynamicTitle, pathname, t])

  return <Fragment />
}

export default RouterGuard
