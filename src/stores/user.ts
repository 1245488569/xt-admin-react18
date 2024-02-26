import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import { STORAGE_PREFIX, USER } from '@/config/cache'
import { loginApi } from '@/api/test'

interface IState {
  token: string
  userInfo: any
  permissions: string[]
}

interface IActions {
  login: (form: any) => Promise<void>
}

export const useUserStore = create<IState & IActions>()(
  immer(
    persist(set => ({
      token: '',
      userInfo: {},
      permissions: [],
      login: async (form: any) => {
        const res = await loginApi(form)
        set((state) => {
          state.token = res.token
          state.userInfo = res
        })
      },
    }), {
      name: `${STORAGE_PREFIX}${USER}`,
      partialize: state => ({ token: state.token, userInfo: state.userInfo }),
    }),
  ),
)
