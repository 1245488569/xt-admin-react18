import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import { useTabbarStore } from './tabbar'
import { useMenuStore } from './menu'
import { STORAGE_PREFIX, USER } from '@/config/cache'
import { loginApi, logoutApi } from '@/api/test'

interface IState {
  token: string
  userInfo: any
}

interface IActions {
  init: () => void
  login: (form: any) => Promise<void>
  logout: () => Promise<void>
}

export const useUserStore = create<IState & IActions>()(
  immer(
    persist((set, get) => ({
      token: '',
      userInfo: {},
      init: () => {
        useMenuStore.getState().init()
        useTabbarStore.getState().init()
        set((state) => {
          state.token = ''
          state.userInfo = {}
        })
      },
      login: async (form) => {
        const res = await loginApi(form)
        set((state) => {
          state.token = res.token
          state.userInfo = res
        })
      },
      logout: async () => {
        await logoutApi().then(() => {
          get().init()
        })
      },
    }), {
      name: `${STORAGE_PREFIX}${USER}`,
      partialize: state => ({ token: state.token, userInfo: state.userInfo }),
    }),
  ),
)
