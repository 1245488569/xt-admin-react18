import type { IPrivateRoutes } from 'types/router'
import type { RouteObject } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import listRoutes from './modules/list'

const privateRoutes: IPrivateRoutes[] = [
  {
    title: '演示',
    icon: 'ep:apple',
    children: [listRoutes],
  },
]

function addPrivateChildrenIndex(privateChildrenRoutes: RouteObject[], parentIndex: number) {
  privateChildrenRoutes.forEach((item) => {
    item.parentIndex = parentIndex
    if (item.children && item.children.length)
      addPrivateChildrenIndex(item.children, item.parentIndex)
  })
}

function addIndexPrivateRoutes() {
  const cloneRoutes = cloneDeep(privateRoutes)
  cloneRoutes.forEach((item, i) => {
    item.parentIndex = i
    if (item.children && item.children.length)
      addPrivateChildrenIndex(item.children, item.parentIndex)
  })
  return cloneRoutes
}

function allPrivateChildrenRoutes() {
  return addIndexPrivateRoutes().map(item => item.children).flat()
}

export default allPrivateChildrenRoutes()

// export default privateRoutes
