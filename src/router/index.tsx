import { type RouteObject, createHashRouter } from 'react-router-dom'
import { Suspense } from 'react'
import DemoLoader from './DemoLoader'

import Root from '@/Root'
import Layout from '@/layouts'

const Login = lazy(() => import('@/views/login'))
const FrameDashboard = lazy(() => import('@/views/frame_dashboard'))
const Demo1 = lazy(() => import('@/views/demo1'))
const Demo2 = lazy(() => import('@/views/demo2'))
const Error404 = lazy(() => import('@/views/404'))
const Error403 = lazy(() => import('@/views/403'))

const importRoutesData = import.meta.glob('./modules/*.tsx', { eager: true })

export const privateRoutes: RouteObject[] = []
Object.keys(importRoutesData).forEach((v) => {
  privateRoutes.push((importRoutesData[v] as any).default)
})
console.log('privateRoutes', privateRoutes)

export const rootRoutes: RouteObject[] = [
  {
    // lazy: () => import('@/Root'),
    id: 'root',
    element: <Root />,
    // loader: DemoLoader,
    children: [
      {
        path: '/login',
        // lazy: () => import('@/views/login'),
        element: <Suspense><Login /></Suspense>,
        meta: {
          isWhite: true,
        },
      },
      {
        // lazy: () => import('@/layouts'),
        id: 'layout',
        element: <Layout />,
        loader: DemoLoader,
        children: [
          {
            path: '/',
            // lazy: () => import('@/views/frame_dashboard'),
            element: <Suspense><FrameDashboard /></Suspense>,
            meta: {
              title: 'route.dashboard',
              icon: 'ri:home-heart-fill',
            },
          },
          {
            path: '/demo1',
            // lazy: () => import('@/views/demo1'),
            element: <Suspense><Demo1 /></Suspense>,
            meta: {
              title: 'route.personal',
              // isWhite: true,
            },
          },
          {
            path: '/demo2',
            element: <Suspense><Demo2 /></Suspense>,
          },
          ...privateRoutes,
        ],
      },
      {
        path: '/403',
        element: <Suspense><Error403 /></Suspense>,
      },
      {
        path: '*',
        // lazy: () => import('@/views/404'),
        element: <Suspense><Error404 /></Suspense>,
      },
    ],
  },
]

export default createHashRouter(rootRoutes)
