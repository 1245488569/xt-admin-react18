import type { CustomRouteObject } from 'types/router'

/**
 * @description 递归查询对应的路由
 * @param {string} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export function searchRoute(path: string, routes: CustomRouteObject[] = []): CustomRouteObject {
  let result: CustomRouteObject = {}
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
