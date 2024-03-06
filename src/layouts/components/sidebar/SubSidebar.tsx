import classNames from 'classnames'
import { useShallow } from 'zustand/react/shallow'
import type { RouteObject } from 'react-router-dom'
import { useRouteLoaderData } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { SubSidebarWrapper } from './style'
import { useSysConfigStore } from '@/stores/config'
import type { ILayoutLoader } from '@/types/common'
import { useMenuStore } from '@/stores/menu'
import { getCatchRouteMeta } from '@/utils/router'
import { rootRoutes } from '@/router'

export default function SubSidebar() {
  const { layoutMode, subMenuCollapse, menuBgColor, menuTextColor, menuHoverBgColor, menuHoverTextColor, menuActiveBgColor, menuActiveTextColor } = useSysConfigStore(useShallow(state => ({
    layoutMode: state.app.layoutMode,
    colorScheme: state.colorScheme,
    subMenuCollapse: state.nav.subMenuCollapse,
    menuBgColor: state.theme.menuBgColor,
    menuTextColor: state.theme.menuTextColor,
    menuHoverBgColor: state.theme.menuHoverBgColor,
    menuHoverTextColor: state.theme.menuHoverTextColor,
    menuActiveBgColor: state.theme.menuActiveBgColor,
    menuActiveTextColor: state.theme.menuActiveTextColor,
  })))

  const { mainMenuActive } = useMenuStore(useShallow(state => ({
    mainMenuActive: state.mainMenuActive,
  })))

  function subSidebarWidth() {
    return !subMenuCollapse ? 'w-[var(--xt-sub-sidebar-width)]' : 'w-[var(--xt-sub-sidebar-collapse-width)]'
  }

  function customMenuClass() {
    return {
      menuContainerBgColor: menuBgColor,
      menuTextColor,
      menuHoverBgColor,
      menuHoverTextColor,
      menuActiveBgColor,
      menuActiveTextColor,
      darkMenuContainerBgColor: 'var(--xt-sub-menu-bg-color)',
      darkMenuTextColor: 'var(--xt-sub-menu-text-color)',
      darkMenuHoverBgColor: 'var(--xt-sub-menu-hover-bg-color)',
      darkMenuHoverTextColor: 'var(--xt-sub-menu-hover-text-color)',
      darkMenuActiveBgColor: 'var(--xt-sub-menu-active-bg-color)',
      darkMenuActiveTextColor: 'var(--xt-sub-menu-active-text-color)',
    }
  }
  const menuClass = customMenuClass()

  const { t } = useTranslation()
  function getSubMenuItems(arr: RouteObject[]) {
    const result: MenuProps['items'] = []
    for (const item of arr) {
      let hasValidChild = false
      const filteredChildren = item.children?.length ? getSubMenuItems(item.children) : []
      // 检查过滤后的子项是否存在有效路径或有子元素
      hasValidChild = filteredChildren!.some((child: any) => child?.path || child?.children.length)
      // 当前项自身有效（即path存在） 或者 存在有效子项时，转换并保留该节点
      if (item.path || hasValidChild) {
        const newItem = {
          label: t(item.meta!.title!),
          key: item.onlyKey!,
          path: item.path,
          icon: item.meta?.icon && <SvgIcon name={item.meta?.icon} />,
          children: filteredChildren?.length ? filteredChildren : undefined,
        }
        // 过滤掉含有空children的顶层对象
        if (newItem.children?.length || newItem.path)
          result.push(newItem)
      }
    }
    return result
  }

  const { allMainMenu, allSubMenu } = useRouteLoaderData('layout') as ILayoutLoader
  function dealMenu() {
    if (['onlyTopNav', 'onlySubSideNav'].includes(layoutMode))
      return allSubMenu

    else
      return allMainMenu[mainMenuActive].children
  }

  const menuItems = getSubMenuItems(dealMenu())
  console.log('menuItems', menuItems)

  const { pathname } = useLocation()
  const curRouteMeta = getCatchRouteMeta(pathname, rootRoutes[0].children)
  const defaultActive = curRouteMeta?.activeMenu || pathname

  const nav = useNavigate()
  const clickSubMenu: MenuProps['onClick'] = (e) => {
    if (e.key === pathname)
      return
    nav(e.key)
  }

  type MenuItem = Required<MenuProps>['items'][number]
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem
  }

  const items: MenuProps['items'] = [
    getItem('Navigation One', 'sub1', null, [
      getItem('Item 1', 'g1', null, [getItem('Option 1', '/')]),
      getItem('Item 2', 'g2', null, [getItem('Option 3', '/demo1')]),
    ]),

    getItem('Navigation Two', 'sub2', null, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4', null, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),

    getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')]),
  ]

  const [openKeys, setOpenKeys] = useState(['sub1', 'g1'])

  return (
    <SubSidebarWrapper className={classNames('flex flex-col', [subSidebarWidth()])} $customSubSidebarClass={menuClass}>
      <ConfigProvider theme={{
        components: {
          Menu: {
            iconSize: 16,
            iconMarginInlineEnd: 5, // 图标与文字间距
          },
        },
      }}
      >
        <div className="flex-1 overflow-hidden py-2 hover:overflow-y-auto">
          <Menu className="xt-menu flex-1" mode="inline" selectedKeys={[defaultActive]} openKeys={openKeys} items={items} onClick={clickSubMenu} onOpenChange={(e) => { setOpenKeys(e) }} />
        </div>
      </ConfigProvider>
    </SubSidebarWrapper>
  )
}
