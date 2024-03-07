import { useShallow } from 'zustand/react/shallow'
import SidebarCollapse from '../tools/SidebarCollapse'
import ChangeSize from '../tools/ChangeSize'
import Reload from '../tools/Reload'
import { ToolbarWrapper } from './style'
import { useSysConfigStore } from '@/stores/config'

export default function Toolbar() {
  const { toolbarBgColor, toolbarTextColor, enableSidebarCollapse, enableMenuSearch, enableElementSize, enablePageReload, enableI18n, enableFullscreen, enableColorScheme, enableChangeTheme } = useSysConfigStore(useShallow(state => ({
    toolbarBgColor: state.theme.toolbarBgColor,
    toolbarTextColor: state.theme.toolbarTextColor,
    enableSidebarCollapse: state.toolbar.enableSidebarCollapse,
    enableMenuSearch: state.toolbar.enableMenuSearch,
    enableElementSize: state.toolbar.enableElementSize,
    enablePageReload: state.toolbar.enablePageReload,
    enableI18n: state.toolbar.enableI18n,
    enableFullscreen: state.toolbar.enableFullscreen,
    enableColorScheme: state.toolbar.enableColorScheme,
    enableChangeTheme: state.toolbar.enableChangeTheme,
  })))
  console.log(enableMenuSearch, enableI18n, enableFullscreen, enableColorScheme, enableChangeTheme)

  function customToolbarClass() {
    return {
      toolbarBgColor,
      toolbarTextColor,
      darkToolbarBgColor: 'var(--xt-tabbar-bg-color)',
      darkToolbarTextColor: 'var(--xt-tabbar-item-bg-color)',
    }
  }

  return (
    <ToolbarWrapper className="h-[var(--xt-toolbar-height)] flex items-center px-4" $customToolbarClass={customToolbarClass()}>
      <div className="flex items-center">
        { enableSidebarCollapse && <SidebarCollapse className="mr-2" /> }
      </div>

      <div className="ml-auto flex items-center">
        { enableElementSize && <ChangeSize className="mr-2" /> }
        { enablePageReload && <Reload className="mr-2" /> }
      </div>
    </ToolbarWrapper>
  )
}
