import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface IState {
  mainMenuActive: number
}

interface IActions {
  init: () => void
  setMainMenuActive: (payload: number) => void
}

export const useMenuStore = create<IState & IActions>()(
  immer(
    set => ({
      mainMenuActive: 0,
      init: () => {
        set((state) => {
          state.mainMenuActive = 0
        })
      },
      setMainMenuActive: (payload) => {
        set((state) => {
          state.mainMenuActive = payload
        })
      },
    }),
  ),
)
