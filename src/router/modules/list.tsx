import type { RouteObject } from 'react-router-dom'
import Layout from '@/layouts'

const UserList = lazy(() => import('@/views/list/user'))
const UserDetail = lazy(() => import('@/views/list/user/detail'))

export default {
  element: <Layout />,
  meta: {
    title: 'route.list.root',
  },
  children: [
    {
      path: '/list/user',
      element: <UserList />,
      meta: {
        title: 'route.list.page1',
        auth: 'user.read',
      },
    },
    {
      path: '/list/user/detail',
      element: <UserDetail />,
      meta: {
        title: 'route.list.detail1',
        hideInMenu: true,
        hideInSearch: true,
        activeMenu: '/list/user',
        mergeTabbarPath: '/list/user',
        auth: 'user.detail',
      },
    },
  ],

} as RouteObject
