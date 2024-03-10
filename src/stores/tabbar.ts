import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { ITabbarItem, ITabbarRemoveType } from '@/types/common'
import router from '@/router'

interface IState {
  list: ITabbarItem[]
}

interface IActions {
  init: () => void
  add: (tab: ITabbarItem) => void
  remove: (type: ITabbarRemoveType, clickIndex: number, activeIndex: number) => void
}

export const useTabbarStore = create<IState & IActions>()(
  immer(
    set => ({
      list: [],
      init: () => {
        set((state) => {
          state.list = []
        })
      },
      add: (tab) => {
        set((state) => {
          if (tab.meta.mergeTabbarPath) {
            const mergeTabIndex = state.list.findIndex(item => item.pathname === tab.meta.mergeTabbarPath)
            if (mergeTabIndex !== -1) {
              state.list.splice(mergeTabIndex, 1, tab)
            }
            else {
              for (const item of state.list) {
                if (item.meta.mergeTabbarPath && item.meta.mergeTabbarPath === tab.meta.mergeTabbarPath)
                  return
              }
              state.list.push(tab)
            }
          }
          else {
            const isFind = state.list.some(item => item.key === tab.key)
            if (!isFind) {
              const isMergeIndex = state.list.findIndex(item => tab.pathname === item.meta.mergeTabbarPath)
              if (isMergeIndex !== -1)
                state.list.splice(isMergeIndex, 1, tab)

              else
                state.list.push(tab)
            }
          }
        })
      },
      remove: (type, clickIndex, activeIndex) => {
        set((state) => {
          switch (type) {
            case 'self':
              if (clickIndex < state.list.length - 1) {
                const tab = state.list[clickIndex + 1]
                router.navigate(tab.pathname + tab.search, { state: tab.state })
              }
              else {
                const tab = state.list[clickIndex - 1]
                router.navigate(tab.pathname + tab.search, { state: tab.state })
              }
              state.list.splice(clickIndex, 1)
              break
            case 'otherOnce':
              state.list.splice(clickIndex, 1)
              break
            case 'left': {
              if (activeIndex < clickIndex) {
                const tab = state.list[clickIndex]
                router.navigate(tab.pathname + tab.search, { state: tab.state })
              }
              state.list.splice(0, clickIndex)
              break
            }
            case 'right': {
              if (activeIndex > clickIndex) {
                const tab = state.list[clickIndex]
                router.navigate(tab.pathname + tab.search, { state: tab.state })
              }
              state.list.splice(clickIndex + 1, state.list.length - (clickIndex + 1))
              break
            }
            case 'otherAll': {
              if (activeIndex !== clickIndex) {
                const tab = state.list[clickIndex]
                router.navigate(tab.pathname + tab.search, { state: tab.state })
              }
              state.list = state.list.filter(item => item.key === state.list[clickIndex].key)
              break
            }
          }
        })
      },
    }),
  ),
)
