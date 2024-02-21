import { createSlice } from '@reduxjs/toolkit'

interface IState {
  token: string
  userInfo: any
  permissions: string[]
}

const initialState: IState = {
  token: '',
  userInfo: {},
  permissions: [],
}

const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
})

export default counterSlice.reducer
