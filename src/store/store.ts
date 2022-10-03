import {configureStore} from '@reduxjs/toolkit'
import { disneyApi } from '../services/disneyApi';
import counterReducer from './counter/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        [disneyApi.reducerPath]: disneyApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(disneyApi.middleware),

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch)