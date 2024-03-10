import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, subscribeWithSelector } from 'zustand/middleware'

// import { produce } from 'immer'
import sysGlobalConfig from '@/GlobalConfig'
import { STORAGE_PREFIX, SYS_CONFIG } from '@/config/cache'

interface IActions {
  setEnableProgress: (payload: boolean) => void // 开/关载入进度条
  setEnableDynamicTitle: (payload: boolean) => void // 开/关动态标题
  setLayoutMode: (payload: LayoutMode) => void // 设置布局模式

  // app
  setDefaultLanguage: (payload: Language) => void // 切换默认语言
  setColorScheme: (payload: ColorScheme) => void // 切换颜色方案
  setElementSize: (payload: ElementSize) => void // 切换框架元素大小

  // nav
  setSubMenuCollapse: (payload: boolean) => void // 开/关子菜单收起
  setActionBarFixed: (payload: boolean) => void // 开/关操作栏固定

  // tabbar
  setEnableTabbar: (payload: boolean) => void // 开/关标签栏

  // toolbar
  setEnableToolbar: (payload: boolean) => void
  setEnableFullscreen: (payload: boolean) => void
  setEnableColorScheme: (payload: boolean) => void
  setEnableChangeTheme: (payload: boolean) => void
  setEnableI18n: (payload: boolean) => void
  setEnableSidebarCollapse: (payload: boolean) => void
  setEnableBreadcrumb: (payload: boolean) => void
  setEnablePageReload: (payload: boolean) => void
  setEnableMenuSearch: (payload: boolean) => void
  setEnableElementSize: (payload: boolean) => void

  // theme
  setTheme: (key: keyof IGlobalTheme, color: string) => void // 设置主题颜色
}

export const useSysConfigStore = create<IGlobalConfig & IActions>()(
  immer(
    subscribeWithSelector(
      persist(set => ({
        ...sysGlobalConfig,
        setDefaultLanguage: (payload) => {
          set((state) => {
            state.defaultLanguage = payload
          })
        },
        setElementSize: (payload) => {
          set((state) => {
            state.elementSize = payload
          })
        },
        setColorScheme: (payload) => {
          set((state) => {
            state.colorScheme = payload
          })
        },
        setEnableProgress: (payload) => {
          // 深层数据使用produce 并且不能省略 {}
          // set(produce((state: IGlobalConfig) => {
          //   state.app.enableProgress = payload
          // }))
          set((state) => {
            state.app.enableProgress = payload
          })
        },
        setEnableDynamicTitle: (payload) => {
          set((state) => {
            state.app.enableDynamicTitle = payload
          })
        },
        setLayoutMode: (payload) => {
          set((state) => {
            state.layoutMode = payload
          })
        },
        setSubMenuCollapse: (payload) => {
          set((state) => {
            state.nav.subMenuCollapse = payload
          })
        },
        setActionBarFixed: (payload) => {
          set((state) => {
            state.nav.fixed = payload
          })
        },
        setEnableTabbar: (payload) => {
          set((state) => {
            state.tabbar.enable = payload
          })
        },
        setEnableToolbar: (payload) => {
          set((state) => {
            state.toolbar.enable = payload
          })
        },
        setEnableFullscreen: (payload) => {
          set((state) => {
            state.toolbar.enableFullscreen = payload
          })
        },
        setEnableColorScheme: (payload) => {
          set((state) => {
            state.toolbar.enableColorScheme = payload
          })
        },
        setEnableChangeTheme: (payload) => {
          set((state) => {
            state.toolbar.enableChangeTheme = payload
          })
        },
        setEnableI18n: (payload) => {
          set((state) => {
            state.toolbar.enableI18n = payload
          })
        },
        setEnableSidebarCollapse: (payload) => {
          set((state) => {
            state.toolbar.enableSidebarCollapse = payload
          })
        },
        setEnableBreadcrumb: (payload) => {
          set((state) => {
            state.toolbar.enableBreadcrumb = payload
          })
        },
        setEnablePageReload: (payload) => {
          set((state) => {
            state.toolbar.enablePageReload = payload
          })
        },
        setEnableMenuSearch: (payload) => {
          set((state) => {
            state.toolbar.enableMenuSearch = payload
          })
        },
        setEnableElementSize: (payload) => {
          set((state) => {
            state.toolbar.enableElementSize = payload
          })
        },

        setTheme: (key, color) => {
          set((state) => {
            state.theme[key] = color
          })
        },
      }), {
        name: `${STORAGE_PREFIX}${SYS_CONFIG}`,
        partialize: state => ({ defaultLanguage: state.defaultLanguage, colorScheme: state.colorScheme, theme: state.theme, layoutMode: state.layoutMode }),
      }),
    ),
  ),
)
