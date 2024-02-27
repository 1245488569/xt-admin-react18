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
    if (item.children && item.children.length) {
      const res = searchRoute(path, item.children)
      if (Object.keys(res).length)
        result = res
    }
  }
  return result
}

// 路由元数据缓存（因为路由的meta信息是固定的，所以可采取缓存方案，优化性能）
const routeMetadataCacheMap = new Map<string, RouteMeta | undefined>()

/**
 * @description 递归查询对应的路由meta
 * @param {string} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export function searchRouteMeta(path: string, routes: RouteObject[] = []): RouteMeta | undefined {
  if (routeMetadataCacheMap.has(path))
    return routeMetadataCacheMap.get(path)

  let meta: RouteMeta | undefined
  for (const item of routes) {
    if (item.path === path) {
      routeMetadataCacheMap.set(path, item.meta)
      return item.meta
    }

    if (item.children && item.children.length)
      meta = searchRouteMeta(path, item.children)
  }

  routeMetadataCacheMap.set(path, meta)
  return meta
}
