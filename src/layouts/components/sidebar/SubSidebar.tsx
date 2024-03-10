import classNames from 'classnames'
import { useShallow } from 'zustand/react/shallow'
import Logo from '../logo'
import { GlobalStyles } from '../top/style'
import { SubSidebarWrapper } from './style'
import SubSiderbarMenu from './SubSiderbarMenu'
import { useSysConfigStore } from '@/stores/config'

export default function SubSidebar() {
  const { layoutMode, subMenuCollapse, menuBgColor, menuTextColor, menuHoverBgColor, menuHoverTextColor, menuActiveBgColor, menuActiveTextColor } = useSysConfigStore(useShallow(state => ({
    layoutMode: state.layoutMode,
    colorScheme: state.colorScheme,
    subMenuCollapse: state.nav.subMenuCollapse,
    menuBgColor: state.theme.menuBgColor,
    menuTextColor: state.theme.menuTextColor,
    menuHoverBgColor: state.theme.menuHoverBgColor,
    menuHoverTextColor: state.theme.menuHoverTextColor,
    menuActiveBgColor: state.theme.menuActiveBgColor,
    menuActiveTextColor: state.theme.menuActiveTextColor,
  })))

  function subSidebarWidth() {
    return !subMenuCollapse ? 'w-[var(--xt-sub-sidebar-width)]' : 'w-[var(--xt-sub-sidebar-collapse-width)]'
  }

  function customMenuClass() {
    return {
      // menuCollapsed: subSidebarWidth(),
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

  return (
    <SubSidebarWrapper className={classNames('flex flex-col', [subSidebarWidth()])} $customMenuClass={menuClass}>
      <GlobalStyles $customMenuClass={menuClass} />
      { showLogo() && <Logo showLogoImage={layoutMode !== 'mainSubSideNav'} showLogoText={!(layoutMode === 'onlySubSideNav' && subMenuCollapse)} /> }
      <ConfigProvider theme={{
        components: {
          Menu: {
            iconMarginInlineEnd: 5, // 图标与文字间距
          },
        },
      }}
      >
        <div className="flex-1 overflow-hidden py-2 hover:overflow-y-auto">
          <SubSiderbarMenu />
        </div>
      </ConfigProvider>
    </SubSidebarWrapper>
  )
}
