import type { CustomRouteObject } from 'types/router'
import Err404 from '@/views/404'

const FrameDashboard = lazy(() => import('@/views/frame_dashboard'))
const Login = lazy(() => import('@/views/login'))
const Demo1 = lazy(() => import('@/views/demo1'))
const Demo2 = lazy(() => import('@/views/demo2'))

const rootRouters: CustomRouteObject[] = [

  {
    path: '/login',
    element: <Login />,
  },
  {
    id: 'root',
    path: '/',
    // element: lazyLoad(lazy(() => import('@/layouts'))),
    children: [
      {
        path: '',
        element: <FrameDashboard />,
      },
      {
        path: 'demo1',
        element: <Demo1 />,
      },
      {
        path: 'demo2',
        element: <Demo2 />,
      },
    ],
  },

  {
    path: '*',
    element: <Err404 />,
  },
]

// const HashRouter = createHashRouter(rootRouters)
// export default HashRouter

export default rootRouters
