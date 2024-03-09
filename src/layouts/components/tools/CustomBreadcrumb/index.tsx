import { isEmpty } from 'lodash'
import type { RouteObject } from 'react-router-dom'
import { useRouteLoaderData } from 'react-router-dom'
import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb'
import type { ILayoutLoader } from '@/types/common'
import { rootRoutes } from '@/router'

export default function CustomBreadcrumb() {
  const [breadcrumb, setBreadcrumb] = useState<ItemType[]>([])

  const { pathname } = useLocation()
  const { allSubMenu } = useRouteLoaderData('layout') as ILayoutLoader
  const { t } = useTranslation()
  useEffect(() => {
    // 根据路由动态生成面包屑
    function getBreadcrumbByPath(path: string, allSubMenu: RouteObject[]): ItemType[] {
      for (const item of allSubMenu) {
        if (item.path === path)
          return [{ title: t(item.meta?.title ?? '') }] // 最后一级不需要链接

        if (!isEmpty(item.children)) {
          const res = getBreadcrumbByPath(path, item.children!)
          if (!isEmpty(res)) {
            const arr = [...res]
            if (item.meta?.title)
              arr.unshift({ title: t(item.meta.title), path: item.path })

            return arr
          }
        }
      }
      return []
    }
    console.log('CustomBreadcrumb tsx pathname', getBreadcrumbByPath(pathname, rootRoutes[0].children!))

    setBreadcrumb(getBreadcrumbByPath(pathname, rootRoutes[0].children!))
  }, [allSubMenu, pathname, t])

  return (
    <Breadcrumb items={breadcrumb} />
  )
}
