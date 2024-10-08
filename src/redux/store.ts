import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'
import bagReducer from './bagSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        bag: bagReducer
    }
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;