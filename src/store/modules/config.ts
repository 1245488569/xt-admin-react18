import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import sysGlobalConfig from '@/GlobalConfig'

const initialState: IGlobalConfig = {
  ...sysGlobalConfig,
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    changeEnableProgressAction(state, { payload }: PayloadAction<boolean>) {
      state.app.enableProgress = payload
    },
  },
})

export const { changeEnableProgressAction } = configSlice.actions
export default configSlice.reducer
