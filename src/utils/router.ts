import type { RouteObject } from 'react-router-dom'
import type { RouteMeta } from 'types/router'

/**
 * @description 递归查询对应的路由所有信息
 * @param {string} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export function searchRoute(path: string, routes: RouteObject[] = []): RouteObject {
  let result: RouteObject = {}
  for (const item of routes) {
    if (item.path === path)
      return item
    if (item.children?.length) {
      const res = searchRoute(path, item.children)
      if (Object.keys(res).length)
        result = res
    }
  }
  return result
}

/**
 * @description 递归查询对应的路由meta
 * @param {string} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export function searchRouteMeta(path: string, routes: RouteObject[] = []): RouteMeta | undefined {
  for (const item of routes) {
    if (item.path === path)
      return item.meta
    if (item.children?.length) {
      const res = searchRouteMeta(path, item.children)
      if (res)
        return res
    }
  }
}

// 路由元数据缓存（因为路由的meta信息是固定的，所以可采取缓存方案，优化性能）
const routeMetadataCacheMap = new Map<string, RouteMeta | undefined>()
export function getCatchRouteMeta(path: string, routes: RouteObject[] = []): RouteMeta | undefined {
  if (routeMetadataCacheMap.has(path))
    return routeMetadataCacheMap.get(path)

  const meta = searchRouteMeta(path, routes)

  routeMetadataCacheMap.set(path, meta)
  return meta
}

/**
 * @description 递归查询对应的路由path
 * @param {Array} route 查询的路由
 * @returns string
 */
export function searchRoutePath(route: RouteObject): string {
  if (route.path)
    return route.path
  if (route.children?.length)
    return searchRoutePath(route.children[0])
  return ''
}
