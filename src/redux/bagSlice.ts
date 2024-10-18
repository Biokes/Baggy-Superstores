import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BagDetails} from "@/interfaces/interfaces"
import small1 from '../../assets/BAGS6548JPG.jpeg';
import GeneratePrice from "@/functions/function";

const bagInitialState: BagDetails= {
    image:small1,
    store: 'OMLop Bags',
    price: GeneratePrice(),
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
