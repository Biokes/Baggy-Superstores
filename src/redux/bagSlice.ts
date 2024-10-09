import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BagDetails, CartItem} from "@/interfaces/interfaces"
const bagInitialState: BagDetails= {
    image:'',
    store: 'not specified yet',
    price: 'not specified yet',
}
const bagSlice= createSlice({
    name : 'bag',
    initialState: bagInitialState,
    reducers:{
        setBag(state,action:PayloadAction<BagDetails>){
            return {...state, ...action.payload}
        },
        clearBagStore(){
            return bagInitialState
        }
    }
})
export const { setBag, clearBagStore} = bagSlice.actions;
export default bagSlice.reducer
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
        decreaseQuantity(state, action: PayloadAction<CartItem>) {
            const item = state.find(cartItem => cartItem.bag.image === action.payload.bag.image);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        popItem(state, action: PayloadAction<CartItem>) {
            return state.filter(cartItem => cartItem.bag.image !== action.payload.bag.image);
        }
    }
})
export const {addItem,increaseQuantity,decreaseQuantity} = cartSlice.actions
module.exports = cartSlice.reducer