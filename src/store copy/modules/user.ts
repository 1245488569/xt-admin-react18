import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginApi } from '@/api/test'
import { LocalStorageService } from '@/utils/storage'
import { TOKEN, USER_INFO } from '@/config/cache'

interface IState {
  token: string
  userInfo: any
  permissions: string[]
}

const initialState: IState = {
  token: LocalStorageService.get(TOKEN) ?? '',
  userInfo: LocalStorageService.get(USER_INFO) ?? '',
  permissions: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, { payload }: PayloadAction<string>) {
      state.token = payload
    },
    setUserInfo(state, { payload }: PayloadAction<any>) {
      state.userInfo = payload
    },
    setPermissions(state, { payload }: PayloadAction<string[]>) {
      state.permissions = payload
    },
  },
})

export const fetchLoginAction = createAsyncThunk('user/fetchLoginAction', async (form: any, { dispatch }) => {
  const res = await loginApi(form)
  LocalStorageService.set(TOKEN, res.token)
  LocalStorageService.set(USER_INFO, res)

  const { setToken, setUserInfo } = userSlice.actions
  dispatch(setToken(res.token))
  dispatch(setUserInfo(res))
})

export default userSlice.reducer
