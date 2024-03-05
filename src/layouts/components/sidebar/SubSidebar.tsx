import classNames from 'classnames'
import { useShallow } from 'zustand/react/shallow'
import type { RouteObject } from 'react-router-dom'
import { useRouteLoaderData } from 'react-router-dom'
import type { MenuProps } from 'antd'
import Logo from '../logo'
import { SubSidebarWrapper } from './style'
import { useSysConfigStore } from '@/stores/config'
import type { ILayoutLoader } from '@/types/common'
import { useMenuStore } from '@/stores/menu'
import { getCatchRouteMeta } from '@/utils/router'
import { rootRoutes } from '@/router'

export default function SubSidebar() {
  const { layoutMode, colorScheme, subMenuCollapse, menuBgColor, menuTextColor, menuHoverBgColor, menuHoverTextColor, menuActiveBgColor, menuActiveTextColor } = useSysConfigStore(useShallow(state => ({
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

  function showLogo() {
    return ['onlySubSideNav', 'mainSubSideNav'].includes(layoutMode)
  }

  const { t } = useTranslation()
  function getSubMenuItems(arr: RouteObject[]): MenuProps['items'] {
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

  const { allMainMenu, allSubmenu } = useRouteLoaderData('layout') as ILayoutLoader
  function dealMenu() {
    if (['onlyTopNav', 'onlySubSideNav'].includes(layoutMode))
      return allSubmenu

    else
      return allMainMenu[mainMenuActive].children
  }

  const nav = useNavigate()
  const clickSubMenu: MenuProps['onClick'] = (e) => {
    nav(e.key)
  }

  const { pathname } = useLocation()
  const curRouteMeta = getCatchRouteMeta(pathname, rootRoutes[0].children)
  const defaultActive = curRouteMeta?.activeMenu || pathname

  return (
    <SubSidebarWrapper className={classNames('flex flex-col', [subSidebarWidth()])} $customSubSidebarClass={menuClass}>
      { showLogo() && <Logo showLogoImage={layoutMode !== 'mainSubSideNav'} showLogoText={!(layoutMode === 'onlySubSideNav' && subMenuCollapse)} /> }
      <div className="flex-1 overflow-hidden py-2 hover:overflow-y-auto">
        <Menu className="xt-menu flex-1" mode="inline" theme={colorScheme === 'dark' ? 'dark' : 'light'} selectedKeys={[defaultActive]} defaultOpenKeys={[defaultActive]} items={getSubMenuItems(dealMenu())} onClick={clickSubMenu} />
      </div>
    </SubSidebarWrapper>
  )
}
