import type { RouteObject } from 'react-router-dom'

export default {
  meta: {
    title: 'route.multimenu.root',
    icon: 'ri:menu-3-line',
  },
  children: [
    {
      meta: {
        title: 'route.multimenu.page1',
      },
      children: [
        {
          meta: {
            title: 'route.multimenu.level2.page1',
          },
          children: [
            {
              path: '/multimenu/one-two',
              lazy: () => import('@/views/multimenu/multimenu1-2'),
              meta: {
                title: 'route.multimenu.level2.page2',
              },
            },
          ],
        },
      ],
    },
    {
      path: '/multimenu/two',
      lazy: () => import('@/views/multimenu/multimenu2'),
      meta: {
        title: 'route.multimenu.page2',
      },
    },
  ],

} as RouteObject
