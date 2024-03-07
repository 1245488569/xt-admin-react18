import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, subscribeWithSelector } from 'zustand/middleware'
import { produce } from 'immer'
import sysGlobalConfig from '@/GlobalConfig'
import { STORAGE_PREFIX, SYS_CONFIG } from '@/config/cache'

interface IActions {
  setEnableProgress: (payload: boolean) => void // 开/关载入进度条
  setEnableDynamicTitle: (payload: boolean) => void // 开/关动态标题
  setDefaultLanguage: (payload: Language) => void // 切换默认语言
  setColorScheme: (payload: ColorScheme) => void // 切换颜色方案
  setSubMenuCollapse: (payload: boolean) => void // 开/关子菜单收起
  setElementSize: (payload: ElementSize) => void // 切换框架元素大小
  setTheme: (key: keyof IGlobalTheme, color: string) => void // 设置主题颜色
  setLayoutMode: (payload: LayoutMode) => void // 设置布局模式
  setActionBarFixed: (payload: boolean) => void // 开/关操作栏固定
}

export const useSysConfigStore = create<IGlobalConfig & IActions>()(
  immer(
    subscribeWithSelector(
      persist(set => ({
        ...sysGlobalConfig,
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
        setDefaultLanguage: (payload) => {
          set((state) => {
            state.defaultLanguage = payload
          })
        },
        setColorScheme: (payload) => {
          set((state) => {
            state.colorScheme = payload
          })
        },
        setSubMenuCollapse: (payload) => {
          set((state) => {
            state.nav.subMenuCollapse = payload
          })
        },
        setElementSize: (payload) => {
          set((state) => {
            state.elementSize = payload
          })
        },
        setTheme: (key, color) => {
          set((state) => {
            state.theme[key] = color
          })
        },
        setLayoutMode: (payload) => {
          set((state) => {
            state.app.layoutMode = payload
          })
        },
        setActionBarFixed: (payload) => {
          set((state) => {
            state.nav.fixed = payload
          })
        },
      }), {
        name: `${STORAGE_PREFIX}${SYS_CONFIG}`,
        partialize: state => ({ defaultLanguage: state.defaultLanguage, colorScheme: state.colorScheme, theme: state.theme }),
        // partialize: state => ({ defaultLanguage: state.defaultLanguage, colorScheme: state.colorScheme }),
      }),
    ),
  ),
)
