import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { RouteObject } from 'react-router-dom'
import { devtools, subscribeWithSelector } from 'zustand/middleware'

interface IState {
  routes: RouteObject[]
  mainMenuActive: number
}

interface IActions {
  setRoutes: (payload: RouteObject[]) => void
}

export const usePermissionrStore = create<IState & IActions>()(
  immer(
    devtools(
      // 用于订阅特定的状态
      subscribeWithSelector(set => ({
        routes: [],
        mainMenuActive: 0,
        setRoutes: (payload) => {
          set((state) => {
            state.routes = payload
          })
        },
      })),
    ),
  ),
)
