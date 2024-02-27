import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { RouteObject } from 'react-router-dom'

interface IState {
  routes: RouteObject[]
  mainMenuActive: number
}

interface IActions {
  setRoutes: (payload: RouteObject[]) => void
}

export const usePermissionrStore = create<IState & IActions>()(
  immer(set => ({
    routes: [],
    mainMenuActive: 0,
    setRoutes: (payload) => {
      set((state) => {
        state.routes = payload
      })
    },
  })),
)
