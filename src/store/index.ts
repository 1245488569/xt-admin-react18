import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import counterReducer from './modules/counter'
import configReducer from './modules/config'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    config: configReducer,
  },
})

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// useAppSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
