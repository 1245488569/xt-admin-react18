import type { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom'

interface RouteMeta {
  // 标题
  title?: string
  // 菜单图标
  icon?: string
  // 是否在菜单中显示
  hideInMenu?: boolean
  // 是否在面包屑中显示
  hideInBreadcrumb?: boolean
  // 是否在搜索菜单中显示
  hideInSearch?: boolean
  // 要合并Tabbar的fullpath
  mergeTabbarPath?: string
  // 高亮的菜单
  activeMenu?: string
  // 权限
  auth?: string | string[]
  // 是否需要缓存
  cache?: boolean | string | string[]
  // 不缓存的页面name（当cache存在才生效）
  noCache?: string | string[]
  //  是不是白名单
  isWhite?: boolean
}

interface CustomIndexRouteObject extends IndexRouteObject {
  // children?: CustomRouteObject[]
  meta?: RouteMeta
}

interface CustomNonIndexRouteObject extends NonIndexRouteObject {
  // children?: CustomRouteObject[]
  meta?: RouteMeta
}

export type CustomRouteObject = CustomIndexRouteObject | CustomNonIndexRouteObject
