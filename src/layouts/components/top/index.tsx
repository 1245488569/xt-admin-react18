import { useShallow } from 'zustand/react/shallow'
import type { RouteObject } from 'react-router-dom'
import { useRouteLoaderData } from 'react-router-dom'
import type { MenuProps } from 'antd'
import Logo from '../logo'
import { TopNavWrapper } from './style'
import { useSysConfigStore } from '@/stores/config'
import type { ILayoutLoader } from '@/types/common'
import { useMenuStore } from '@/stores/menu'
import { getCatchRouteMeta } from '@/utils/router'
import { rootRoutes } from '@/router'

export default function Top() {
  const { layoutMode, colorScheme, mainMenuBgColor, menuBgColor, mainMenuTextColor, menuTextColor, mainMenuHoverBgColor, menuHoverBgColor, mainMenuHoverTextColor, menuHoverTextColor, mainMenuActiveBgColor, menuActiveBgColor, mainMenuActiveTextColor, menuActiveTextColor } = useSysConfigStore(useShallow(state => ({
    layoutMode: state.app.layoutMode,
    colorScheme: state.colorScheme,
    mainMenuBgColor: state.theme.mainMenuBgColor,
    menuBgColor: state.theme.menuBgColor,
    mainMenuTextColor: state.theme.mainMenuTextColor,
    menuTextColor: state.theme.menuTextColor,
    mainMenuHoverBgColor: state.theme.mainMenuHoverBgColor,
    menuHoverBgColor: state.theme.menuHoverBgColor,
    mainMenuHoverTextColor: state.theme.mainMenuHoverTextColor,
    menuHoverTextColor: state.theme.menuHoverTextColor,
    mainMenuActiveBgColor: state.theme.mainMenuActiveBgColor,
    menuActiveBgColor: state.theme.menuActiveBgColor,
    mainMenuActiveTextColor: state.theme.mainMenuActiveTextColor,
    menuActiveTextColor: state.theme.menuActiveTextColor,
  })))

  const { mainMenuActive, setMainMenuActive } = useMenuStore(useShallow(state => ({
    mainMenuActive: state.mainMenuActive,
    setMainMenuActive: state.setMainMenuActive,
  })))

  const { allMainMenu, allSubmenu } = useRouteLoaderData('layout') as ILayoutLoader
  console.log('Top tsx allMainMenu', allMainMenu)

  const { t } = useTranslation()
  function getMainMenuItems(): MenuProps['items'] {
    return allMainMenu.filter(v => v.children?.length).map((k) => {
      return {
        label: t(k.title),
        key: `${k.parentIndex!}`,
        icon: <SvgIcon name={k.icon} />,
      }
    })
  }

  const clickMainMenu: MenuProps['onClick'] = (e) => {
    setMainMenuActive(Number(e.key))
  }

  // 递归获取菜单项
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

  const { pathname } = useLocation()
  const curRouteMeta = getCatchRouteMeta(pathname, rootRoutes[0].children)
  const defaultActive = curRouteMeta?.activeMenu || pathname
  const nav = useNavigate()

  const clickSubMenu: MenuProps['onClick'] = (e) => {
    nav(e.key)
  }

  function customMenuClass() {
    if (layoutMode === 'topSubSideNav') {
      return {
        menuContainerBgColor: mainMenuBgColor,
        menuTextColor: mainMenuTextColor,
        menuHoverBgColor: mainMenuHoverBgColor,
        menuHoverTextColor: mainMenuHoverTextColor,
        menuActiveBgColor: mainMenuActiveBgColor,
        menuActiveTextColor: mainMenuActiveTextColor,
        darkMenuContainerBgColor: 'var(--xt-main-menu-bg-color)',
        darkMenuTextColor: 'var(--xt-main-menu-text-color)',
        darkMenuHoverBgColor: 'var(--xt-main-menu-hover-bg-color)',
        darkMenuHoverTextColor: 'var(--xt-main-menu-hover-text-color)',
        darkMenuActiveBgColor: 'var(--xt-main-menu-active-bg-color)',
        darkMenuActiveTextColor: 'var(--xt-main-menu-active-text-color)',
      }
    }
    else if (layoutMode === 'onlyTopNav') {
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
  }
  const menuClass = customMenuClass()

  return (
    <TopNavWrapper className="h-[var(--xt-top-nav-height)] flex flex-shrink-0 items-center px-4" $customMenuClass={menuClass}>
      <Logo className="mr-4 text-xl" />
      <ConfigProvider theme={{
        components: {
          Menu: {
            // TODO: 多级菜单的子菜单，选中状态的背景色不对
            activeBarHeight: 0,
            horizontalItemBorderRadius: 8,
            iconSize: 20,
            iconMarginInlineEnd: 5, // 图标与文字间距
            itemBg: menuClass?.menuContainerBgColor, // 菜单项背景色（整个菜单背景色）
            itemColor: menuClass?.menuTextColor, // 菜单项文字颜色（整个菜单文字色）
            // horizontalItemHoverColor: '#f00', // 水平菜单项文字悬浮颜色（不清楚是啥） 对不上

            horizontalItemHoverBg: colorScheme === 'dark' ? menuClass?.darkMenuHoverBgColor : menuClass?.menuHoverBgColor, // 横向菜单项横悬浮态背景色(鼠标经过)
            // horizontalItemSelectedBg: menuClass?.menuActiveBgColor, // 水平菜单项选中态背景色(选中的项) (暗黑下没作用)
            // horizontalItemSelectedColor: menuClass?.menuActiveTextColor, // 水平菜单项文字选中颜色(只针对可跳转的菜单项) (暗黑下没作用)

            itemActiveBg: colorScheme === 'dark' ? menuClass?.darkMenuActiveBgColor : menuClass?.menuActiveBgColor, // 菜单项激活态背景色(点击在popup层的菜单项，点击那瞬间的背景色)
            itemHoverBg: menuClass?.menuHoverBgColor, // 菜单项悬浮态背景色(鼠标经过popup层的菜单项)
            itemHoverColor: menuClass?.menuHoverTextColor, // 菜单项文字悬浮颜色(鼠标经过popup层的菜单项,文字颜色)
            itemSelectedBg: menuClass?.menuActiveBgColor, // 菜单项选中态背景色(popup层的菜单项 选中的颜色)
            itemSelectedColor: menuClass?.menuActiveTextColor, // 菜单项文字选中颜色(popup层的菜单项 选中的颜色，以及子菜单项选中的文字颜色)

            darkItemBg: menuClass?.darkMenuContainerBgColor, // 暗黑模式菜单项背景色
            darkItemColor: menuClass?.darkMenuTextColor, // 暗色模式下菜单项文字颜色（整个菜单文字色）
            darkItemHoverBg: menuClass?.darkMenuHoverBgColor,
            darkItemSelectedBg: menuClass?.darkMenuActiveBgColor,
            darkItemSelectedColor: menuClass?.darkMenuActiveTextColor,

            subMenuItemBg: '#f00', // 子菜单项背景色(对于是popup的无效)
            // subMenuItemBorderRadius: 20, // 子菜单项圆角
          },
        },
      }}
      >
        {/* 顶部主导航+侧边次导航 */}
        { layoutMode === 'topSubSideNav' && (
          <Menu className="xt-menu flex-1" mode="horizontal" theme={colorScheme === 'dark' ? 'dark' : 'light'} selectedKeys={[`${mainMenuActive}`]} items={getMainMenuItems()} onClick={clickMainMenu} />
        ) }
        {/* 只有顶部导航 */}
        { layoutMode === 'onlyTopNav' && (
          <Menu className="xt-menu flex-1" mode="horizontal" theme={colorScheme === 'dark' ? 'dark' : 'light'} selectedKeys={[defaultActive]} items={getSubMenuItems(allSubmenu)} onClick={clickSubMenu} />
        ) }
      </ConfigProvider>

    </TopNavWrapper>
  )
}
