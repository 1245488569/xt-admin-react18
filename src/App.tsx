import { Suspense } from 'react'
import { type RouteObject, RouterProvider, createHashRouter } from 'react-router-dom'
import { cloneDeep } from 'lodash'
import Loading from './views/Loading'
import RouterGuard from './router/RouterGuard'
import useAntdI18n from './hooks/useAntdI18n'
import { shallowEqualApp, useAppDispatch, useAppSelector } from './store'
import useSystemRouter from './hooks/useSystemRouter'

import { setRoutes } from './store/modules/permission'
import rootRoutes from './router'

function App() {
  console.log('App tsx')

  const locale = useAntdI18n()

  // const [allRoutes, setAllRoutes] = useState<RouteObject[]>([])
  // console.log('routes', allRoutes)

  // const { storeRoutes } = useAppSelector(
  //   state => ({
  //     storeRoutes: state.permission.routes,
  //   }),
  //   shallowEqualApp,
  // )
  // const { filterPermissionsRoutes } = useSystemRouter()
  // const dispatch = useAppDispatch()
  // useEffect(() => {
  //   if (!allRoutes.length && !storeRoutes.length) {
  //     (
  //       async () => {
  //         const res = await filterPermissionsRoutes()
  //         console.log('filterPermissionsRoutes res', res)
  //         setAllRoutes(res)
  //         // 递归删除res中的element属性 返回新的数组
  //         const routes = cloneDeep(res)
  //         routes.forEach((route) => {
  //           delete route.element
  //           if (route.children) {
  //             route.children = route.children.map((child) => {
  //               delete child.element
  //               return child
  //             })
  //           }
  //         })
  //         dispatch(setRoutes(routes))
  //       }
  //     )()
  //   }
  // }, [allRoutes.length, dispatch, filterPermissionsRoutes, storeRoutes.length])

  return (
    <ConfigProvider locale={locale}>

      <Suspense fallback={<div>loading</div>}>
        <RouterProvider router={createHashRouter(rootRoutes)} />
      </Suspense>

    </ConfigProvider>

  )
}

export default App
