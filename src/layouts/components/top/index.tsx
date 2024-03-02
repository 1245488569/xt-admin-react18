import { useShallow } from 'zustand/react/shallow'
import { useRouteLoaderData } from 'react-router-dom'
import type { MenuProps } from 'antd'
import Logo from '../logo'
import { useSysConfigStore } from '@/stores/config'
import type { ILayoutLoader } from '@/types/common'
import { useMenuStore } from '@/stores/menu'
import { getCatchRouteMeta } from '@/utils/router'
import { rootRoutes } from '@/router'

export default function Top() {
  const { layoutMode } = useSysConfigStore(useShallow(state => ({
    layoutMode: state.app.layoutMode,
  })))

  const { mainMenuActive, setMainMenuActive } = useMenuStore(useShallow(state => ({
    mainMenuActive: state.mainMenuActive,
    setMainMenuActive: state.setMainMenuActive,
  })))

  const { allMainMenu, allSubmenus } = useRouteLoaderData('layout') as ILayoutLoader
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
    setMainMenuActive(e.key)
  }

  function getSubMenuItems(): MenuProps['items'] {
    return allSubmenus.map((v, vi) => {
      return {
        label: t(v.meta!.title!),
        key: v.path || `${vi}`,
        icon: v.meta?.icon && <SvgIcon name={v.meta?.icon} />,
        children: v.children?.length
          ? v.children?.map((k, ki) => {
            return {
              label: t(k.meta!.title!),
              key: k.path || `${vi}-${ki}`,
              icon: k.meta?.icon && <SvgIcon name={k.meta?.icon} />,
            }
          })
          : undefined,
      }
    })
  }

  const { pathname } = useLocation()
  const curRouteMeta = getCatchRouteMeta(pathname, rootRoutes)
  const defaultActive = curRouteMeta?.activeMenu || pathname
  const nav = useNavigate()

  const clickSubMenu: MenuProps['onClick'] = (e) => {
    nav(e.key)
  }

  return (
    <div className="top-nav-container h-[var(--xt-top-nav-height)] flex flex-shrink-0 items-center px-4">
      <Logo className="mr-4 text-xl" />
      {/* 顶部主导航+侧边次导航 */}
      { layoutMode === 'topSubSideNav' && (
        <Menu className="main-menu flex-1" mode="horizontal" selectedKeys={[mainMenuActive]} items={getMainMenuItems()} onClick={clickMainMenu} />
      ) }
      {/* 只有顶部导航 */}
      { layoutMode === 'onlyTopNav' && (
        <Menu className="flex-1" mode="horizontal" selectedKeys={[defaultActive]} items={getSubMenuItems()} onClick={clickSubMenu} />
      ) }
    </div>
  )
}
