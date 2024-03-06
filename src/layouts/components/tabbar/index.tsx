import { useShallow } from 'zustand/react/shallow'
import classNames from 'classnames'
import type { MenuProps } from 'antd'
import { TabbarWrapper } from './style'
import { useSysConfigStore } from '@/stores/config'
import { getCatchRouteMeta } from '@/utils/router'
import { rootRoutes } from '@/router'
import { useTabbarStore } from '@/stores/tabbar'
import type { ITabbarItem } from '@/types/common'

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

  const { tabList, addTab } = useTabbarStore(useShallow(state => ({
    tabList: state.list,
    addTab: state.add,
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
  }, [addTab, location.pathname, location.search, location.state])

  const dropdownMenus: MenuProps['items'] = [
    {
      label: t('tabbar.refresh'),
      key: 'refresh',
    },
    {
      label: t('tabbar.delete'),
      key: 'delete',
    },
    {
      label: t('tabbar.deleteLeft'),
      key: 'deleteLeft',
    },
    {
      label: t('tabbar.deleteRight'),
      key: 'deleteRight',
    },
    {
      label: t('tabbar.deleteOther'),
      key: 'deleteOther',
      disabled: true,
    },
  ]

  const nav = useNavigate()
  function goTo(item: ITabbarItem) {
    console.log('item', item)
    if (location.pathname + location.search + JSON.stringify(item.state) === item.key)
      return

    nav(item.pathname + item.search, {
      state: item.state,
    })
  }

  return (
    <TabbarWrapper className="h-[var(--xt-tabbar-height)] w-full flex items-center overflow-hidden whitespace-nowrap text-xs" $customTabbarClass={customTabbarClass()}>
      <div className="h-full flex px-2 py-1">
        {
        tabList.map(item => (
          <Dropdown key={item.key} menu={{ items: dropdownMenus }} trigger={['contextMenu']}>
            <div className={classNames('tabbar-item mr-2 h-full flex cursor-pointer items-center rounded-md px-2 duration-300', { active: item.key === location.pathname + location.search + JSON.stringify(item.state) })} onClick={() => goTo(item)}>
              <div className="w-[100px] flex items-center">
                <span className="w-[70px] truncate">{ t(item.meta.title!) }</span>
                { tabList.length > 1 && <span className="ml-1"><SvgIcon name="ant-design:close-circle-outlined" className="h-14px w-14px" /></span> }
              </div>
            </div>
          </Dropdown>
        ))
      }
      </div>
    </TabbarWrapper>
  )
}
