import type { IPrivateRoutes } from 'types/router'
import type { RouteObject } from 'react-router-dom'
import listRoutes from './modules/list'
import componentRoutes from './modules/component'
import layoutTwoRoutes from './modules/LayoutTwo'
import multistepRoutes from './modules/multistep'

export const privateRoutes: IPrivateRoutes[] = [
  {
    title: '演示',
    icon: 'ant-design:appstore-outlined',
    children: [listRoutes, componentRoutes, multistepRoutes],
  },
  {
    title: '系统设置',
    icon: 'ant-design:setting-outlined',
    children: [layoutTwoRoutes],
  },
]

function addPrivateChildrenIndex(privateChildrenRoutes: RouteObject[], parentIndex: number) {
  privateChildrenRoutes.forEach((item) => {
    item.parentIndex = parentIndex
    if (item.children?.length)
      addPrivateChildrenIndex(item.children, item.parentIndex)
  })
}

function allPrivateChildrenRoutes() {
  privateRoutes.forEach((item, i) => {
    item.parentIndex = i
    if (item.children?.length)
      addPrivateChildrenIndex(item.children, item.parentIndex)
  })

  return privateRoutes.map(item => item.children).flat()
}

export default allPrivateChildrenRoutes()
