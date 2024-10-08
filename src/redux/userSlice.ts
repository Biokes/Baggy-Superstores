import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState{
    email: string,
    password: string,
    id:number
}
const initialState: UserState = {
    password: '',
    email: '',
    id: 0,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            return { ...state, ...action.payload };
        },
        clearUser() {
            return initialState;
            },
    },
});
export const { setUser,clearUser} = userSlice.actions;
export default userSlice.reducer
