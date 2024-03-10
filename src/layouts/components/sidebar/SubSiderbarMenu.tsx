import type { MenuProps } from 'antd'
import type { TFunction } from 'i18next'
import type { RouteObject } from 'react-router-dom'
import { useRouteLoaderData } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import { rootRoutes } from '@/router'
import { useSysConfigStore } from '@/stores/config'
import { useMenuStore } from '@/stores/menu'
import type { ILayoutLoader } from '@/types/common'
import { getCatchRouteMeta } from '@/utils/router'

// 查找父级key, 不包括自己
function findParentKeys(arr: any, key: string): string[] {
  let result: string[] = []
  for (const item of arr) {
    if (item.children?.length) {
      if (item.children.some((child: any) => child.key === key)) {
        result = [item.key]
        break
      }
      else {
        result = findParentKeys(item.children, key)
        if (result.length) {
          result.unshift(item.key)
          break
        }
      }
    }
  }
  return result
}

function getSubMenuItems(arr: RouteObject[], t: TFunction<'translation', undefined>) {
  const result: MenuProps['items'] = []
  for (const item of arr) {
    let hasValidChild = false
    const filteredChildren = item.children?.length ? getSubMenuItems(item.children, t) : []
    // 检查过滤后的子项是否存在有效路径或有子元素
    hasValidChild = filteredChildren!.some((child: any) => child?.path || child?.children.length)
    // 当前项自身有效（即path存在） 或者 存在有效子项时，转换并保留该节点
    if (item.path || hasValidChild) {
      const newItem = {
        label: t(item.meta!.title || ''),
        key: item.onlyKey!,
        path: item.path,
        icon: item.meta?.icon && <SvgIcon name={item.meta?.icon} size={20} />,
        children: filteredChildren?.length ? filteredChildren : undefined,
        popupClassName: 'xt-admin-popup-menu',
      }
      // 过滤掉含有空children的顶层对象
      if (newItem.children?.length || newItem.path)
        result.push(newItem)
    }
  }
  return result
}

export default function SubSiderbarMenu() {
  const { layoutMode, subMenuCollapse } = useSysConfigStore(useShallow(state => ({
    layoutMode: state.layoutMode,
    subMenuCollapse: state.nav.subMenuCollapse,
  })))

  const { mainMenuActive } = useMenuStore(useShallow(state => ({
    mainMenuActive: state.mainMenuActive,
  })))

  const { pathname } = useLocation()
  const [defaultActive, setDefaultActive] = useState<string>('')
  const [openKeys, setOpenKeys] = useState<string[]>([])

  const { t } = useTranslation()

  const { allMainMenu, allSubMenu } = useRouteLoaderData('layout') as ILayoutLoader

  useEffect(() => {
    const curRouteMeta = getCatchRouteMeta(pathname, rootRoutes[0].children)
    setDefaultActive(curRouteMeta?.activeMenu || pathname)
  }, [pathname])

  const [menuItems, setMenuItems] = useState<MenuProps['items']>([])

  useEffect(() => {
    function dealMenu() {
      if (['onlyTopNav', 'onlySubSideNav'].includes(layoutMode))
        return allSubMenu

      else
        return allMainMenu[mainMenuActive].children
    }

    setMenuItems(() => {
      const newMenuItems = getSubMenuItems(dealMenu(), t)
      const curRouteMeta = getCatchRouteMeta(pathname, rootRoutes[0].children)
      const defaultOpenKeys = findParentKeys(newMenuItems, curRouteMeta?.activeMenu || pathname)
      setOpenKeys(defaultOpenKeys)
      return newMenuItems
    })
  }, [allMainMenu, allSubMenu, layoutMode, mainMenuActive, pathname, t])

  function handleChange(e: string[]) {
    setOpenKeys(e)
  }

  const nav = useNavigate()
  const clickSubMenu: MenuProps['onClick'] = (e) => {
    if (e.key === pathname)
      return
    nav(e.key)
  }

  return (
    <Menu className="xt-menu flex-1" mode="inline" inlineCollapsed={subMenuCollapse} selectedKeys={[defaultActive]} openKeys={openKeys} onOpenChange={e => handleChange(e)} items={menuItems} onClick={clickSubMenu} />
  )
}

// function findParentKeys(arr: any, path: string): string[] {
//   const result: string[] = []
//   for (const item of arr) {
//     if (item.children?.length) {
//       const find = findParentKeys(item.children, path)
//       if (find.length) {
//         result.push(item.key)
//         result.push(...find)
//       }
//     }
//     else if (item.path === path) {
//       result.push(item.key)
//     }
//   }
//   return result
// }
