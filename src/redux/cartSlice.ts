import {CartItem,CartAndIcon} from "@/interfaces/interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
const cartList:CartItem[] = []
const initialState:CartAndIcon = {
    isRed:false,
    cart:cartList
}

const cartSlice = createSlice ({
    name:'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            state.cart.push(action.payload);
            state.isRed= true;
        },
        increaseQuantity(state, action: PayloadAction<CartItem>) {
            // const item= state.cart.find(initialState.cart => .image === action.payload.bag.image);
            // const quantity = action.payload.quantity
            // if (item) {
            //     item.quantity++;
            // }
        },
        decreaseQuantity(state, action: PayloadAction<CartItem>){
            // const item = state.find(cartItem: => cartItem.bag.image === action.payload.bag.image);
            // if (item && item.quantity > 1) {
            //     item.quantity--;
            // }
        },
        popItem(state, action: PayloadAction<CartItem>) {
            // return state.filter(cartItem => cartItem.bag.image !== action.payload.bag.image);

        },
        offRed(state){
            state.isRed=false;
        },
        onRed(state){
            state.isRed=true;
        }
    }
})
export const {addItem,
    increaseQuantity,
    decreaseQuantity,
    popItem,
    offRed,onRed} = cartSlice.actions
export default cartSlice.reducer