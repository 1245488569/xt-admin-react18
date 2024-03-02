import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface IState {
  mainMenuActive: string
}

interface IActions {
  setMainMenuActive: (payload: string) => void
}

export const useMenuStore = create<IState & IActions>()(
  immer(
    set => ({
      mainMenuActive: '0',
      setMainMenuActive: (payload) => {
        set((state) => {
          state.mainMenuActive = payload
        })
      },
    }),
  ),
)
