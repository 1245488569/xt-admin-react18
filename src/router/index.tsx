import type { RouteObject } from 'react-router-dom'
import DemoLoader from './DemoLoader'

const rootRoutes: RouteObject[] = [
  {
    lazy: () => import('@/Root'),
    loader: DemoLoader,
    children: [
      {
        path: '/login',
        lazy: () => import('@/views/login'),
      },
      {
        lazy: () => import('@/layouts'),
        children: [
          {
            path: '/',
            lazy: () => import('@/views/frame_dashboard'),
            meta: {
              title: 'route.dashboard',
              icon: 'ri:home-heart-fill',
            },
          },
          {
            path: '/demo1',
            lazy: () => import('@/views/demo1'),
            meta: {
              title: 'route.dashboard',
              isWhite: true,
            },
          },
        ],
      },
      // {
      //   path: '/demo2',
      //   element: <Demo2 />,
      // },
      {
        path: '*',
        lazy: () => import('@/views/404'),
      },
    ],
  },
]

export default rootRoutes
