import {useDispatch, useSelector } from 'react-redux'
import type {TypedUseSelectorHook} from 'react-redux'
import type { RootState,AppDispatch } from './store'

export const useAppDispatch: () => AppDispatch = useDispatch
// It saves you the need to type (state: RootState) every time
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector