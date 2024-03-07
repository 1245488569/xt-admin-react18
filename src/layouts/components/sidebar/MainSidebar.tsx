import type { RouteObject } from 'react-router-dom'
import { useRouteLoaderData } from 'react-router-dom'
import classNames from 'classnames'
import { useShallow } from 'zustand/react/shallow'
import { isEmpty } from 'lodash'
import Logo from '../logo'
import { MainSidebarMenuWrapper } from './style'
import type { ILayoutLoader } from '@/types/common'
import { useMenuStore } from '@/stores/menu'
import { useSysConfigStore } from '@/stores/config'

export default function MainSidebar() {
  const { allMainMenu, allSubMenu } = useRouteLoaderData('layout') as ILayoutLoader
  const { t } = useTranslation()

  const { mainMenuActive, setMainMenuActive } = useMenuStore(useShallow(state => ({
    mainMenuActive: state.mainMenuActive,
    setMainMenuActive: state.setMainMenuActive,
  })))

  const { mainMenuBgColor, mainMenuTextColor, mainMenuHoverBgColor, mainMenuHoverTextColor, mainMenuActiveBgColor, mainMenuActiveTextColor } = useSysConfigStore(useShallow(state => ({
    mainMenuBgColor: state.theme.mainMenuBgColor,
    mainMenuTextColor: state.theme.mainMenuTextColor,
    mainMenuHoverBgColor: state.theme.mainMenuHoverBgColor,
    mainMenuHoverTextColor: state.theme.mainMenuHoverTextColor,
    mainMenuActiveBgColor: state.theme.mainMenuActiveBgColor,
    mainMenuActiveTextColor: state.theme.mainMenuActiveTextColor,
  })))

  function customMenuClass() {
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
  const menuClass = customMenuClass()

  const clickMainMenu = (parentIndex: number) => {
    setMainMenuActive(parentIndex)
  }

  const { pathname } = useLocation()
  useEffect(() => {
    function findCurItemByPath(path: string, allSubMenu: RouteObject[]): RouteObject | undefined {
      if (isEmpty(allSubMenu))
        return undefined
      for (const item of allSubMenu) {
        if (item.path === path)
          return item

        if (!isEmpty(item.children)) {
          const res = findCurItemByPath(path, item.children!)
          if (res)
            return res
        }
      }
    }
    setMainMenuActive(findCurItemByPath(pathname, allSubMenu)?.parentIndex ?? 0)
  }, [allSubMenu, pathname, setMainMenuActive])

  return (
    <MainSidebarMenuWrapper className="w-[var(--xt-main-sidebar-width)] flex flex-shrink-0 flex-col" $customMainSidebarClass={menuClass}>
      <Logo showLogoText={false} />
      <div className="main-sidebar-menu-container flex-1 py-1">
        <ul>
          {allMainMenu.map((item, index) => (
            <li key={index} className={classNames('main-menu-item mx-2 mb-1 h-[var(--xt-main-sidebar-item-height)] flex flex-col cursor-pointer items-center justify-center rounded-lg px-1 text-14px', { 'is-active': item.parentIndex === mainMenuActive })} onClick={() => clickMainMenu(item.parentIndex!)}>
              <SvgIcon name={item.icon} size={20} />
              <span className="w-full truncate text-center" title={t(item.title)}>{t(item.title)}</span>
            </li>
          ))}
        </ul>
      </div>
    </MainSidebarMenuWrapper>
  )
}
