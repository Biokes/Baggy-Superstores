import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'
import cartReducer from './cartSlice'
import bagReducer from './bagSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        bag: bagReducer,
        cart: cartReducer
    }
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;