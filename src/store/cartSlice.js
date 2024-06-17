import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cartValue: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        updateCartValue: (state, action)=>{
            state.cartValue =action.payload;
        }
    }
})

export const {updateCartValue} =cartSlice.actions;
export default cartSlice.reducer;