import { RouterProvider } from 'react-router-dom'
import useAntdI18n from './hooks/useAntdI18n'
import router from './router'

function App() {
  console.log('App tsx')

  const locale = useAntdI18n()

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

  return (
    <ConfigProvider locale={locale}>
      <RouterProvider router={router} />
    </ConfigProvider>

  )
}

export default App
