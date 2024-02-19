import type { CustomRouteObject } from 'types/router'
import { createHashRouter } from 'react-router-dom'
import { lazyLoad } from './LazyLoad'
import DemoLoader from './DemoLoader'
import Err404 from '@/views/404'

const routes: CustomRouteObject[] = [
  {
    id: 'root',
    loader: DemoLoader,
    // element: lazyLoad(lazy(() => import('@/layouts'))),
    children: [
      {
        path: '/',
        element: lazyLoad(lazy(() => import('@/views/frame_dashboard'))),
      },
      {
        path: '/login',
        element: lazyLoad(lazy(() => import('@/views/login'))),
      },
    ],
  },

  {
    path: '*',
    element: <Err404 />,
  },
]

const HashRouter = createHashRouter(routes)
export default HashRouter
