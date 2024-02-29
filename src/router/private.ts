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
