import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface IState {
  count: number
  message: string
}

const initialState: IState = {
  count: 100,
  message: 'Hello lxc',
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    },
  },
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
