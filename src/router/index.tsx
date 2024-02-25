import type { RouteObject } from 'react-router-dom'
import DemoLoader from './DemoLoader'
import Err404 from '@/views/404'

const Layout = lazy(() => import('@/layouts'))
const FrameDashboard = lazy(() => import('@/views/frame_dashboard'))
const Login = lazy(() => import('@/views/login'))
const Demo1 = lazy(() => import('@/views/demo1'))
const Demo2 = lazy(() => import('@/views/demo2'))

const rootRoutes: RouteObject[] = [
  {
    id: 'root',
    loader: DemoLoader,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <FrameDashboard />,
        meta: {
          title: 'route.dashboard',
          icon: 'ri:home-heart-fill',
        },
      },
      {
        path: '/demo1',
        element: <Demo1 />,
        meta: {
          title: 'route.dashboard',
          isWhite: true,
        },
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  // {
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: '/',
  //       element: <FrameDashboard />,
  //       meta: {
  //         title: 'route.dashboard',
  //         icon: 'ri:home-heart-fill',
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/demo1',
  //   element: <Demo1 />,
  //   meta: {
  //     title: 'route.dashboard',
  //     isWhite: true,
  //   },
  // },
  {
    path: '/demo2',
    element: <Demo2 />,
  },
  {
    path: '*',
    element: <Err404 />,
  },
]

// const HashRouter = createHashRouter(rootRoutes)
// export default HashRouter

export function Router() {
  const routes = useRoutes(rootRoutes)
  return routes
}

export default rootRoutes
