import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { ITabbarItem, ITabbarRemoveType } from '@/types/common'

interface IState {
  list: ITabbarItem[]
}

interface IActions {
  add: (tab: ITabbarItem) => void
  remove: (type: ITabbarRemoveType, clickIndex: number, activeIndex: number) => void
}

export const useTabbarStore = create<IState & IActions>()(
  immer(
    set => ({
      list: [],
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
          console.log(type, clickIndex, activeIndex, state.list)
        })
      },
    }),
  ),
)
