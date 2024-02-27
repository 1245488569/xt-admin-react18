import { RouterProvider, createHashRouter } from 'react-router-dom'
import { useImmer } from 'use-immer'
import { Suspense } from 'react'
import { cloneDeep } from 'lodash'
import useAntdI18n from './hooks/useAntdI18n'
import { usePermissionrStore } from './stores/permission'
import useSystemRouter from './hooks/useSystemRouter'
import rootRoutes from './router'
import Demo2 from './views/demo2'

function App() {
  console.log('App tsx')

  const locale = useAntdI18n()
  const [r, setR] = useImmer(rootRoutes)

  // useEffect(() => {
  //   const cancelSub = usePermissionrStore.subscribe(
  //     state => state.routes,
  //     (routes) => {
  //       console.log('App tsx usePermissionrStore.subscribe', routes)
  //       // setR((draft) => {
  //       //   draft[0].children?.push({
  //       //     path: '/demo3',
  //       //     element: <Suspense><Demo2 /></Suspense>,
  //       //   })
  //       // })
  //     },
  //     {
  //       // equalityFn: shallow,
  //       fireImmediately: true,
  //     },
  //   )

  //   return () => cancelSub()
  // }, [])

  const { filterPermissionsRoutes } = useSystemRouter()
  useLayoutEffect(() => {
    const res = filterPermissionsRoutes()
    console.log('App tsx filterPermissionsRoutes', [...res])
    setR((draft) => {
      draft[0].children?.push(...cloneDeep([...res]))
    })

    // setTimeout(() => {
    //   setR((draft) => {
    //     draft[0].children?.push({
    //       path: '/demo3',
    //       element: <Suspense><Demo2 /></Suspense>,
    //     })
    //   })
    // }, 2000)
  }, [])

  return (
    <ConfigProvider locale={locale}>
      <RouterProvider router={createHashRouter(r)} />
    </ConfigProvider>

  )
}

export default App
