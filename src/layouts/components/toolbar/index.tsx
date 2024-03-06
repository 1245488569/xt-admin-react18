import { useShallow } from 'zustand/react/shallow'
import { ToolbarWrapper } from './style'
import { useSysConfigStore } from '@/stores/config'

export default function Toolbar() {
  const { toolbarBgColor, toolbarTextColor } = useSysConfigStore(useShallow(state => ({
    toolbarBgColor: state.theme.toolbarBgColor,
    toolbarTextColor: state.theme.toolbarTextColor,
  })))

  function customToolbarClass() {
    return {
      toolbarBgColor,
      toolbarTextColor,
      darkToolbarBgColor: 'var(--xt-tabbar-bg-color)',
      darkToolbarTextColor: 'var(--xt-tabbar-item-bg-color)',
    }
  }

  return <ToolbarWrapper className="h-[var(--xt-toolbar-height)] flex items-center px-4" $customToolbarClass={customToolbarClass()}>Toolbar</ToolbarWrapper>
}
