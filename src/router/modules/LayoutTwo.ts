import type { RouteObject } from 'react-router-dom'

export default {
  lazy: () => import('@/views/layout-two'),
  children: [
    {
      path: '/layout-two/page1',
      lazy: () => import('@/views/layout-two/page1'),
      meta: {
        title: 'page1',
        icon: 'ant-design:layout-filled',
      },
    },
    {
      path: '/layout-two/page2',
      lazy: () => import('@/views/layout-two/page2'),
      meta: {
        title: 'page2',
        icon: 'ant-design:project-filled',
      },
    },
  ],

} as RouteObject
