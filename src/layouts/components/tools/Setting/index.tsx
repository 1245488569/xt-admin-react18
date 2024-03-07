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

  const { layoutMode, enableProgress, enableDynamicTitle, subMenuCollapse, actionBarfixed, setLayoutMode, setEnableProgress, setEnableDynamicTitle, setSubMenuCollapse, setActionBarFixed } = useSysConfigStore(useShallow(state => ({
    layoutMode: state.app.layoutMode,
    enableProgress: state.app.enableProgress,
    enableDynamicTitle: state.app.enableDynamicTitle,
    subMenuCollapse: state.nav.subMenuCollapse,
    actionBarfixed: state.nav.fixed,

    setLayoutMode: state.setLayoutMode,
    setEnableProgress: state.setEnableProgress,
    setEnableDynamicTitle: state.setEnableDynamicTitle,
    setSubMenuCollapse: state.setSubMenuCollapse,
    setActionBarFixed: state.setActionBarFixed,
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
        <Alert message={<span className="text-[#f56c6c]">应用配置可实时预览效果，仅临时生效。</span>} type="error" />
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
      </Drawer>
    </>
  )
}
