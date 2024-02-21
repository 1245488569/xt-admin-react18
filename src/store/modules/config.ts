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
    // 开/关载入进度条
    changeEnableProgressAction(state, { payload }: PayloadAction<boolean>) {
      state.app.enableProgress = payload
    },
    // 开/关动态标题
    changeEnableDynamicTitleAction(state, { payload }: PayloadAction<boolean>) {
      state.app.enableDynamicTitle = payload
    },
    // 切换默认语言
    changeDefaultLanguageAction(state, { payload }: PayloadAction<Language>) {
      state.defaultLanguage = payload
    },
  },
})

export const { changeEnableProgressAction, changeEnableDynamicTitleAction, changeDefaultLanguageAction } = configSlice.actions
export default configSlice.reducer
