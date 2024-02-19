import { createSlice } from '@reduxjs/toolkit'
import sysGlobalConfig from '@/GlobalConfig'

const initialState: IGlobalConfig = {
  ...sysGlobalConfig,
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
})

export default configSlice.reducer
