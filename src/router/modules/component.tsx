import type { RouteObject } from 'react-router-dom'

export default {
  meta: {
    title: '组件',
    icon: 'ant-design:mac-command-filled',
  },
  children: [
    {
      path: '/component/icon',
      lazy: () => import('@/views/component/icon/index'),
      meta: {
        title: '图标选择器',
      },
    },
  ],

} as RouteObject
