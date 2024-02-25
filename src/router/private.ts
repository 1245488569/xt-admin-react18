// * 导入所有私有路由模块
// const privateRoutes = import.meta.glob('./modules/*.tsx', { eager: true })

// export const routerArray: RouteObject[] = []
// Object.keys(privateRoutes).forEach((item) => {
//   console.log(item)
//   console.log(privateRoutes[item])
//   const route = (privateRoutes[item] as any).default
//   console.log(route)
// })

import type { IPrivateRoutes } from 'types/router'
import listRoutes from './modules/list'

const privateRoutes: IPrivateRoutes[] = [
  {
    title: '演示',
    icon: 'ep:apple',
    children: [listRoutes],
  },
]

export default privateRoutes
