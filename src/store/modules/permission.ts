import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { RouteObject } from 'react-router-dom'

interface IState {
  routes: RouteObject[]
  mainMenuActive: number
}

const initialState: IState = {
  routes: [],
  mainMenuActive: 0,
}

const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    setRoutes(state, { payload }: PayloadAction<RouteObject[]>) {
      state.routes = payload
    },
  },
})

export const { setRoutes } = permissionSlice.actions

export default permissionSlice.reducer
