import { CartItem, Cart, BagDetails } from "@/interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const itemsCart: CartItem[] = [];
const initialState: Cart = {
    cart: itemsCart,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const existingItem = state.cart.find(
                (item) => item.bag.image === action.payload.bag.image
            );
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.cart.push(action.payload);
            }
        },

        decreaseQuantity(state, action: PayloadAction<CartItem>) {
            const item = state.cart.find(
                (cartItem) => cartItem.bag.image === action.payload.bag.image
            );
            if (item && item.quantity > 1) {
                item.quantity--;
            } else {
                state.cart = state.cart.filter(
                    (cartItem) => cartItem.bag.image !== action.payload.bag.image
                );
            }
        },

        popItem(state, action: PayloadAction<BagDetails>) {
            state.cart = state.cart.filter(
                (cartItem) =>
                    !(
                        cartItem.bag.image === action.payload.image &&
                        cartItem.bag.price === action.payload.price &&
                        cartItem.bag.store === action.payload.store
                    )
            );
        },

        increaseQuantity(state, action: PayloadAction<CartItem>) {
            const item = state.cart.find(
                (cartItem) => cartItem.bag.image === action.payload.bag.image
            );
            if (item) {
                item.quantity++;
            }
        },
    },
});

export const { addItem,
               increaseQuantity,
               decreaseQuantity,
               popItem } =
                cartSlice.actions;
export default cartSlice.reducer;
