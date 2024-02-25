import type { RouteObject } from 'react-router-dom'

/**
 * @description 递归查询对应的路由
 * @param {string} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export function searchRoute(path: string, routes: RouteObject[] = []): RouteObject {
  let result: RouteObject = {}
  for (const item of routes) {
    if (item.path === path)
      return item
    if (item.children) {
      const res = searchRoute(path, item.children)
      if (Object.keys(res).length)
        result = res
    }
  }
  return result
}
