import type { RouteObject } from 'react-router-dom'

// const UserList = lazy(() => import('@/views/list/user'))
// const UserDetail = lazy(() => import('@/views/list/user/detail'))

export default {
  meta: {
    title: 'route.list.root',
    icon: 'ant-design:hdd-filled',
  },
  children: [
    {
      path: '/list/user',
      // element: <Suspense><UserList /></Suspense>,
      lazy: () => import('@/views/list/user'),
      meta: {
        title: 'route.list.page1',
        auth: 'user.read',
      },
    },
    {
      path: '/list/user/detail',
      // element: <Suspense><UserDetail /></Suspense>,
      lazy: () => import('@/views/list/user/detail'),
      meta: {
        title: 'route.list.detail1',
        hideInMenu: true,
        hideInSearch: true,
        activeMenu: '/list/user',
        mergeTabbarPath: '/list/user',
        auth: 'user.detail',
      },
    },

    {
      path: '/list/goods',
      lazy: () => import('@/views/list/goods'),
      meta: {
        title: 'route.list.page2',
        auth: 'user.read',
      },
      children: [
        {
          path: '/list/goods/detail',
          lazy: () => import('@/views/list/goods/detail'),
          meta: {
            title: 'route.list.detail2',
            hideInMenu: true,
            hideInSearch: true,
            activeMenu: '/list/goods',
            mergeTabbarPath: '/list/goods',
            auth: 'user.detail',
          },
        },
      ],
    },
  ],

} as RouteObject
