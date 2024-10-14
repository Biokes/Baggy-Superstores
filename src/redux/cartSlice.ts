import {CartItem} from "@/interfaces/interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:CartItem[] = []
const cartSlice = createSlice ({
    name:'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            state.push(action.payload);
        },
        increaseQuantity(state, action: PayloadAction<CartItem>) {
            const item = state.find(cartItem => cartItem.bag.image === action.payload.bag.image);
            if (item) {
                item.quantity++;
            }
        },
        decreaseQuantity(state, action: PayloadAction<CartItem>){
            const item = state.find(cartItem => cartItem.bag.image === action.payload.bag.image);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        popItem(state, action: PayloadAction<CartItem>) {
            return state.filter(cartItem => cartItem.bag.image !== action.payload.bag.image);

        },
    }
})
export const {addItem,increaseQuantity,decreaseQuantity,popItem} = cartSlice.actions
export default cartSlice.reducer