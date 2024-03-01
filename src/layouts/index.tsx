import { useShallow } from 'zustand/react/shallow'
import classNames from 'classnames'
import { useSysConfigStore } from '@/stores/config'

export function Component() {
  console.log('Layout tsx')
  const { layoutMode, navFixed, subMenuCollapse, showToolbar, showTabbar, elementSize } = useSysConfigStore(useShallow(state => ({
    layoutMode: state.app.layoutMode,
    navFixed: state.nav.fixed,
    subMenuCollapse: state.nav.subMenuCollapse,
    showToolbar: state.toolbar.enable,
    showTabbar: state.tabbar.enable,
    elementSize: state.elementSize,
  })))

  // 目前不清楚 接下来的react19版本对useMemo的态度，而且这里就算多次使用这些函数，也不会有性能问题
  function showTop() {
    return ['onlyTopNav', 'topSubSideNav'].includes(layoutMode)
  }

  function showSidebar() {
    return layoutMode !== 'onlyTopNav'
  }

  function showMainSidebar() {
    return layoutMode === 'mainSubSideNav'
  }

  function showSubSidebar() {
    return layoutMode !== 'onlyTopNav'
  }

  function sideBarWidth() {
    if (!subMenuCollapse) {
      if (showMainSidebar())
        return 'w-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-width))]'

      return 'w-[var(--xt-sub-sidebar-width)]'
    }
    else {
      if (showMainSidebar())
        return 'w-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-collapse-width))]'

      return 'w-[var(--xt-sub-sidebar-collapse-width)]'
    }
  }

  const siderBarClass = classNames('h-full flex', [sideBarWidth])

  function actionbarLeft() {
    if (!showSidebar)
      return 'left-0'

    if (!subMenuCollapse) {
      if (layoutMode === 'mainSubSideNav')
        return 'left-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-width))]'
      else
        return 'left-[var(--xt-sub-sidebar-width)]'
    }
    else {
      if (layoutMode === 'mainSubSideNav')
        return 'left-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-collapse-width))]'

      else
        return 'left-[var(--xt-sub-sidebar-collapse-width)]'
    }
  }

  function actionbarTop() {
    if (['onlyTopNav', 'topSubSideNav'].includes(layoutMode))
      return 'top-[var(--xt-top-nav-height)]'

    return 'top-0'
  }

  const actionbarClass = classNames('right-0', {
    fixed: navFixed,
  }, [actionbarLeft(), actionbarTop()])

  function viewContextMarginTop() {
    if (!navFixed)
      return 'mt-0'

    if (showToolbar && showTabbar)
      return 'mt-[calc(var(--xt-tabbar-height)+var(--xt-toolbar-height))]'

    else if (showToolbar && !showTabbar)
      return 'mt-[var(--xt-toolbar-height)]'

    else if (!showToolbar && showTabbar)
      return 'mt-[var(--xt-tabbar-height)]'

    else
      return 'mt-0'
  }

  function viewContextFontSize() {
    let fs = ''
    switch (elementSize) {
      case 'large':
        fs = 'text-base'
        break
      case 'small':
        fs = 'text-xs'
        break
      default:
        fs = 'text-sm'
        break
    }
    return fs
  }

  const viewContextClass = classNames('flex-1', {
    'overflow-auto': navFixed,
  }, [viewContextMarginTop(), viewContextFontSize()])

  return (
    <div className="h-full">
      <section className="relative h-full flex flex-col">
        {
          showTop() && <div>top组件</div>
        }

        <div className="flex flex-1 overflow-hidden">
          {
            showSidebar() && (
              <div className={siderBarClass}>
                { showMainSidebar() && <div>main-sidebar组件</div> }
                { showSubSidebar() && <div>sub-sidebar组件</div> }
              </div>
            )
          }

          <main className={classNames('main-box flex flex-1 flex-col overflow-x-hidden bg-[#f5f5f5] dark:bg-[var(--el-bg-color)]', { 'overflow-auto': navFixed })}>
            <div className={actionbarClass}>
              { showTabbar && <div>tabbar组件</div> }
              { showToolbar && <div>toolbar组件</div> }
            </div>

            <section className={viewContextClass}>
              <Outlet />
            </section>
          </main>
        </div>

      </section>
    </div>
  )
}
