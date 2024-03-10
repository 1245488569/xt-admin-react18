import { useShallow } from 'zustand/react/shallow'
import classNames from 'classnames'
import type { MenuProps } from 'antd'
import BScroll from '@better-scroll/core'
import type { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
import { TabbarWrapper } from './style'
import { useSysConfigStore } from '@/stores/config'
import { getCatchRouteMeta } from '@/utils/router'
import { rootRoutes } from '@/router'
import { useTabbarStore } from '@/stores/tabbar'
import type { ITabbarItem, ITabbarRemoveType } from '@/types/common'

export default function Tabbar() {
  const { tabbarBgColor, tabbarItemBgColor, tabbarItemActiveBgColor, tabbarItemHoverBgColor, tabbarItemTextColor, tabbarItemActiveTextColor, tabbarItemHoverTextColor } = useSysConfigStore(useShallow(state => ({
    tabbarBgColor: state.theme.tabbarBgColor,
    tabbarItemBgColor: state.theme.tabbarItemBgColor,
    tabbarItemActiveBgColor: state.theme.tabbarItemActiveBgColor,
    tabbarItemHoverBgColor: state.theme.tabbarItemHoverBgColor,
    tabbarItemTextColor: state.theme.tabbarItemTextColor,
    tabbarItemActiveTextColor: state.theme.tabbarItemActiveTextColor,
    tabbarItemHoverTextColor: state.theme.tabbarItemHoverTextColor,
  })))

  const { tabList, addTab, removeTab } = useTabbarStore(useShallow(state => ({
    tabList: state.list,
    addTab: state.add,
    removeTab: state.remove,
  })))

  function customTabbarClass() {
    return {
      tabbarBgColor,
      tabbarItemBgColor,
      tabbarItemActiveBgColor,
      tabbarItemHoverBgColor,
      tabbarItemTextColor,
      tabbarItemActiveTextColor,
      tabbarItemHoverTextColor,
      darkTabbarBgColor: 'var(--xt-tabbar-bg-color)',
      darkTabbarItemBgColor: 'var(--xt-tabbar-item-bg-color)',
      darkTabbarItemActiveBgColor: 'var(--xt-tabbar-item-active-bg-color)',
      darkTabbarItemHoverBgColor: 'var(--xt-tabbar-item-hover-bg-color)',
      darkTabbarItemTextColor: 'var(--xt-tabbar-item-text-color)',
      darkTabbarItemActiveTextColor: 'var(--xt-tabbar-item-active-text-color)',
      darkTabbarItemHoverTextColor: 'var(--xt-tabbar-item-hover-text-color)',
    }
  }

  const { t } = useTranslation()
  const location = useLocation()

  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollItemRef = useRef<HTMLDivElement>(null)
  const [bs, setBs] = useState<BScrollConstructor>()

  useEffect(() => {
    setBs(new BScroll(scrollRef.current!, {
      scrollX: true,
      probeType: 0,
    }))

    return () => {
      bs?.destroy()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const curRouteMeta = getCatchRouteMeta(location.pathname, rootRoutes[0].children)
    if (!curRouteMeta?.title)
      return
    addTab({
      pathname: location.pathname,
      search: location.search,
      state: location.state,
      meta: curRouteMeta,
      // 以pathname search state组成的唯一值
      key: location.pathname + location.search + JSON.stringify(location.state),
    })

    bs?.refresh()
    const scrollIndex = tabList.findIndex(item => item.key === location.pathname + location.search + JSON.stringify(location.state))
    if (scrollIndex !== -1 && scrollItemRef.current?.children)
      bs?.scrollToElement(scrollItemRef.current.children[scrollIndex] as HTMLElement, 500, true, false)
  }, [addTab, bs, location.pathname, location.search, location.state, tabList])

  const nav = useNavigate()
  function goTo(item: ITabbarItem) {
    console.log('item', item)
    if (location.pathname + location.search + JSON.stringify(location.state) === item.key)
      return

    nav(item.pathname + item.search, {
      state: item.state,
    })
  }

  function closeTab(e: React.MouseEvent<HTMLSpanElement, MouseEvent>, index: number) {
    e.stopPropagation()
    const activeIndex = tabList.findIndex(item => item.key === location.pathname + location.search + JSON.stringify(location.state))
    if (activeIndex === index)
      removeTab('self', index, activeIndex)

    else
      removeTab('otherOnce', index, activeIndex)
  }

  const activeIndex = tabList.findIndex(item => item.key === location.pathname + location.search + JSON.stringify(location.state))
  function contextMenuCloseTab(index: number, type?: ITabbarRemoveType) {
    if (!type) {
      if (index === activeIndex)
        type = 'self'
      else
        type = 'otherOnce'
    }

    removeTab(type, index, activeIndex)
  }

  function renderContextMenu(index: number): MenuProps['items'] {
    return [
      {
        label: t('tabbar.refresh'),
        key: 'refresh',
        disabled: index !== activeIndex,
        onClick: () => nav('/reload'),
      },
      {
        label: t('tabbar.delete'),
        key: 'deleteOnce',
        disabled: tabList.length <= 1,
        onClick: () => contextMenuCloseTab(index),
      },
      {
        label: t('tabbar.deleteLeft'),
        key: 'deleteLeft',
        disabled: index === 0,
        onClick: () => contextMenuCloseTab(index, 'left'),
      },
      {
        label: t('tabbar.deleteRight'),
        key: 'deleteRight',
        disabled: index === tabList.length - 1,
        onClick: () => contextMenuCloseTab(index, 'right'),
      },
      {
        label: t('tabbar.deleteOther'),
        key: 'deleteOther',
        disabled: tabList.length <= 1,
        onClick: () => contextMenuCloseTab(index, 'otherAll'),
      },
    ]
  }

  return (
    <TabbarWrapper ref={scrollRef} className="h-[var(--xt-tabbar-height)] w-full flex items-center overflow-hidden whitespace-nowrap text-xs" $customTabbarClass={customTabbarClass()}>
      <div ref={scrollItemRef} className="h-full flex px-2 py-1">
        {
        tabList.map((tab, index) => (
          <Dropdown key={tab.key} menu={{ items: renderContextMenu(index) }} trigger={['contextMenu']}>
            <div className={classNames('tabbar-item mr-2 h-full flex cursor-pointer items-center rounded-md px-2 duration-300', { active: tab.key === location.pathname + location.search + JSON.stringify(location.state) })} onClick={() => goTo(tab)}>
              <div className="w-[100px] flex items-center">
                <span className="w-[70px] truncate">{ t(tab.meta.title!) }</span>
                { tabList.length > 1 && <span className="ml-1" onClick={e => closeTab(e, index)}><SvgIcon name="ant-design:close-circle-outlined" size={14} /></span> }
              </div>
            </div>
          </Dropdown>
        ))
      }
      </div>
    </TabbarWrapper>
  )
}
