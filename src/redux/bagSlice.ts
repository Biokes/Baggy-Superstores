import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BagDetails} from "@/interfaces/interfaces"
const bagInitialState: BagDetails= {
    image:'',
    storename: 'not specified yet',
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