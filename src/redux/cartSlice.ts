import {CartItem,Cart} from "@/interfaces/interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
const itemsCart:CartItem[]=[];
const initialState:Cart = {
    cart: itemsCart
}

const cartSlice = createSlice ({
    name:'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            state.cart.push(action.payload);
        },
        decreaseQuantity(state, action: PayloadAction<CartItem>){
            state.cart.filter(item => item.quantity >-1 && action.payload)
        },
        popItem(state, action: PayloadAction<CartItem>) {
            state.cart.filter(cartItem => cartItem.bag.image !== action.payload.bag.image);

        },
        increaseQuantity(state, action: PayloadAction<CartItem>) {
            const item= state.cart.find(item => item.bag.image === action.payload.bag.image);
            if (item) {
                item.quantity++
            }
        },
    }
})
export const {addItem,
    increaseQuantity,
    decreaseQuantity,
    popItem} = cartSlice.actions
export default cartSlice.reducer