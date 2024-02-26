import { Suspense } from 'react'
import rootRoutes from '@/router'
import RouterGuard from '@/router/RouterGuard'
import { shallowEqualApp, useAppSelector } from '@/store'
import { searchRoute } from '@/utils/router'

export function Component() {
  console.log('Layout tsx')

  // const { t } = useTranslation()
  // const { pathname } = useLocation()
  // const toRoute = searchRoute(pathname, rootRoutes)
  // console.log('Layout tsx pathname', pathname)
  // console.log('Layout tsx toRoute', toRoute)

  // const { enableDynamicTitle, token } = useAppSelector(
  //   state => ({
  //     enableDynamicTitle: state.config.app.enableDynamicTitle,
  //     token: state.user.token,
  //   }),
  //   shallowEqualApp,
  // )

  // useEffect(() => {
  //   console.log('Layout tsx useEffect')
  //   document.title = import.meta.env.VITE_APP_TITLE
  //   if (enableDynamicTitle && toRoute.meta?.title)
  //     document.title = t(toRoute.meta.title)
  // }, [enableDynamicTitle, t, toRoute.meta?.title])

  // console.log('token', token)

  return (
    <div>
      <div className="bg-red-500">top</div>
      <Suspense fallback={<div>loading</div>}>

        <Outlet />
      </Suspense>
      <div className="bg-red-500">bootom</div>
    </div>
  )
}
