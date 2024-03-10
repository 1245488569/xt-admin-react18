import { useShallow } from 'zustand/react/shallow'
import { useSysConfigStore } from '@/stores/config'

interface IProps {
  className?: string
}

const layoutModeOptions = [
  { value: 'onlyTopNav', label: <span>只有顶部导航</span> },
  { value: 'onlySubSideNav', label: <span>只有侧边栏导航</span> },
  { value: 'mainSubSideNav', label: <span>侧边主导航+侧边次栏导航</span> },
  { value: 'topSubSideNav', label: <span>顶部主导航+侧边次栏导航</span> },
]

export default function Reload(props: IProps) {
  const { className } = props

  const { layoutMode, enableProgress, enableDynamicTitle, subMenuCollapse, actionBarfixed, tabbarEnable, toolbarEnable, enableFullscreen, enableChangeTheme, enableColorScheme, enableI18n, enableSidebarCollapse, enableBreadcrumb, enablePageReload, enableMenuSearch, setLayoutMode, setEnableProgress, setEnableDynamicTitle, setSubMenuCollapse, setActionBarFixed, setEnableTabbar, setEnableToolbar, setEnableFullscreen, setEnableChangeTheme, setEnableColorScheme, setEnableI18n, setEnableSidebarCollapse, setEnableBreadcrumb, setEnablePageReload, setEnableMenuSearch } = useSysConfigStore(useShallow(state => ({
    layoutMode: state.layoutMode,
    enableProgress: state.app.enableProgress,
    enableDynamicTitle: state.app.enableDynamicTitle,
    subMenuCollapse: state.nav.subMenuCollapse,
    actionBarfixed: state.nav.fixed,
    tabbarEnable: state.tabbar.enable,
    toolbarEnable: state.toolbar.enable,
    enableFullscreen: state.toolbar.enableFullscreen,
    enableChangeTheme: state.toolbar.enableChangeTheme,
    enableColorScheme: state.toolbar.enableColorScheme,
    enableI18n: state.toolbar.enableI18n,
    enableSidebarCollapse: state.toolbar.enableSidebarCollapse,
    enableBreadcrumb: state.toolbar.enableBreadcrumb,
    enablePageReload: state.toolbar.enablePageReload,
    enableMenuSearch: state.toolbar.enableMenuSearch,

    setLayoutMode: state.setLayoutMode,
    setEnableProgress: state.setEnableProgress,
    setEnableDynamicTitle: state.setEnableDynamicTitle,
    setSubMenuCollapse: state.setSubMenuCollapse,
    setActionBarFixed: state.setActionBarFixed,
    setEnableTabbar: state.setEnableTabbar,
    setEnableToolbar: state.setEnableToolbar,
    setEnableFullscreen: state.setEnableFullscreen,
    setEnableColorScheme: state.setEnableColorScheme,
    setEnableChangeTheme: state.setEnableChangeTheme,
    setEnableI18n: state.setEnableI18n,
    setEnableSidebarCollapse: state.setEnableSidebarCollapse,
    setEnableBreadcrumb: state.setEnableBreadcrumb,
    setEnablePageReload: state.setEnablePageReload,
    setEnableMenuSearch: state.setEnableMenuSearch,
    setEnableElementSize: state.setEnableElementSize,
  })))

  const [open, setOpen] = useState(false)

  function handleChange(value: LayoutMode) {
    setLayoutMode(value)
  }

  return (
    <>
      <div className={`h-50px w-50px flex cursor-pointer items-center justify-center rounded bg-[#1677ff] dark:bg-[#308899] text-white ${className}`} onClick={() => setOpen(true)}>
        <SvgIcon name="ri:settings-2-line" size={25} />
      </div>
      <Drawer title="应用配置" onClose={() => setOpen(false)} open={open}>
        <Alert message={<span className="text-[#f56c6c]">应用配置可实时预览效果，仅临时生效。更多配置请前往代码的GlobalConfig.ts文件中查看。</span>} type="error" />
        <Divider>布局模式</Divider>
        <div>
          <Select style={{ width: '100%' }} defaultValue={layoutMode} options={layoutModeOptions} onChange={handleChange} />
        </div>

        <Divider>app</Divider>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">开启载入进度条</span>
          <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={enableProgress} onChange={e => setEnableProgress(e)} />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">开启动态标题</span>
          <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={enableDynamicTitle} onChange={e => setEnableDynamicTitle(e)} />
        </div>

        <Divider>导航</Divider>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">当前侧边次导航状态</span>
          <Switch checkedChildren="收起" unCheckedChildren="展开" defaultChecked={subMenuCollapse} onChange={e => setSubMenuCollapse(e)} />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">开启操作栏固定</span>
          <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={actionBarfixed} onChange={e => setActionBarFixed(e)} />
        </div>

        <Divider>标签栏</Divider>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">开启标签栏</span>
          <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={tabbarEnable} onChange={e => setEnableTabbar(e)} />
        </div>

        <Divider>工具栏</Divider>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">开启工具栏</span>
          <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={toolbarEnable} onChange={e => setEnableToolbar(e)} />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">显示全屏按钮</span>
          <Switch checkedChildren="显示" unCheckedChildren="关闭" defaultChecked={enableFullscreen} onChange={e => setEnableFullscreen(e)} />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">显示换肤按钮</span>
          <Switch checkedChildren="显示" unCheckedChildren="关闭" defaultChecked={enableChangeTheme} onChange={e => setEnableChangeTheme(e)} />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">显示暗黑按钮</span>
          <Switch checkedChildren="显示" unCheckedChildren="关闭" defaultChecked={enableColorScheme} onChange={e => setEnableColorScheme(e)} />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">显示国际化按钮</span>
          <Switch checkedChildren="显示" unCheckedChildren="关闭" defaultChecked={enableI18n} onChange={e => setEnableI18n(e)} />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">显示侧边栏展开收起按钮</span>
          <Switch checkedChildren="显示" unCheckedChildren="关闭" defaultChecked={enableSidebarCollapse} onChange={e => setEnableSidebarCollapse(e)} />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">显示面包屑导航</span>
          <Switch checkedChildren="显示" unCheckedChildren="关闭" defaultChecked={enableBreadcrumb} onChange={e => setEnableBreadcrumb(e)} />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">显示页面刷新按钮</span>
          <Switch checkedChildren="显示" unCheckedChildren="关闭" defaultChecked={enablePageReload} onChange={e => setEnablePageReload(e)} />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500">显示菜单搜索按钮</span>
          <Switch checkedChildren="显示" unCheckedChildren="关闭" defaultChecked={enableMenuSearch} onChange={e => setEnableMenuSearch(e)} />
        </div>
      </Drawer>
    </>
  )
}
