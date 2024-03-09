import { useShallow } from 'zustand/react/shallow'
import SidebarCollapse from '../tools/SidebarCollapse'
import ChangeSize from '../tools/ChangeSize'
import Reload from '../tools/Reload'
import LangSelect from '../tools/LangSelect'
import Screenfull from '../tools/Screenfull'
import ChangeColorScheme from '../tools/ChangeColorScheme'
import ChangeTheme from '../tools/ChangeTheme'
import CustomBreadcrumb from '../tools/CustomBreadcrumb'
import { ToolbarWrapper } from './style'
import { useSysConfigStore } from '@/stores/config'

export default function Toolbar() {
  console.log('Toolbar tsx')

  const { toolbarBgColor, toolbarTextColor, enableSidebarCollapse, enableMenuSearch, enableElementSize, enablePageReload, enableI18n, enableFullscreen, enableColorScheme, enableChangeTheme, enableBreadcrumb } = useSysConfigStore(useShallow(state => ({
    toolbarBgColor: state.theme.toolbarBgColor,
    toolbarTextColor: state.theme.toolbarTextColor,
    enableSidebarCollapse: state.toolbar.enableSidebarCollapse,
    enableBreadcrumb: state.toolbar.enableBreadcrumb,
    enableMenuSearch: state.toolbar.enableMenuSearch,
    enableElementSize: state.toolbar.enableElementSize,
    enablePageReload: state.toolbar.enablePageReload,
    enableI18n: state.toolbar.enableI18n,
    enableFullscreen: state.toolbar.enableFullscreen,
    enableColorScheme: state.toolbar.enableColorScheme,
    enableChangeTheme: state.toolbar.enableChangeTheme,
  })))
  console.log('todo enableMenuSearch', enableMenuSearch)

  function customToolbarClass() {
    return {
      toolbarBgColor,
      toolbarTextColor,
      darkToolbarBgColor: 'var(--xt-toolbar-bg-color)',
      darkToolbarTextColor: 'var(--xt-toolbar-text-color)',
    }
  }

  return (
    <ToolbarWrapper className="h-[var(--xt-toolbar-height)] flex items-center px-4" $customToolbarClass={customToolbarClass()}>
      <div className="flex items-center">
        { enableSidebarCollapse && <SidebarCollapse className="mr-2" /> }

        { enableBreadcrumb && <CustomBreadcrumb /> }
      </div>

      <div className="ml-auto flex items-center">
        { enableElementSize && <ChangeSize className="mr-2" /> }
        { enablePageReload && <Reload className="mr-2" /> }
        { enableI18n && <LangSelect className="mr-2" /> }
        { enableFullscreen && <Screenfull className="mr-2" /> }
        { enableColorScheme && <ChangeColorScheme className="mr-2" /> }
        { enableChangeTheme && <ChangeTheme className="mr-2" /> }
      </div>
    </ToolbarWrapper>
  )
}
