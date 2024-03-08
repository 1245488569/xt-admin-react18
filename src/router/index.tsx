import { type RouteObject, createHashRouter } from 'react-router-dom'
import LayoutLoader from './LayoutLoader'
import privateRoutes from './private'
import Root from '@/Root'

export const rootRoutes: RouteObject[] = [
  {
    // lazy: () => import('@/Root'),
    id: 'root',
    element: <Root />,
    children: [
      {
        path: '/login',
        lazy: () => import('@/views/login'),
        // element: <Suspense><Login /></Suspense>,
        meta: {
          isWhite: true,
        },
      },
      {
        id: 'layout',
        lazy: () => import('@/layouts'),
        // element: <Layout />,
        loader: LayoutLoader,
        children: [
          {
            path: '/',
            lazy: () => import('@/views/frame-dashboard'),
            // element: <Suspense><FrameDashboard /></Suspense>,
            parentIndex: 0,
            meta: {
              title: 'route.dashboard',
              icon: 'ri:home-heart-fill',
            },
          },
          ...privateRoutes,
          {
            path: '/reload',
            lazy: () => import('@/views/reload'),
          },
        ],
      },
      {
        path: '/403',
        // element: <Suspense><Error403 /></Suspense>,
        lazy: () => import('@/views/403'),
      },
      {
        path: '*',
        // element: <Suspense><Error404 /></Suspense>,
        lazy: () => import('@/views/404'),
      },
    ],
  },
]

export default createHashRouter(rootRoutes)
