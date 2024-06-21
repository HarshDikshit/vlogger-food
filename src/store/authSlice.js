import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    loginStatus: false,
    userData:null,
    isAdmin: false,
}

const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{
        login: (state, action)=>{
            state.loginStatus=true;
            state.userData=action.payload;
        },
        adminStatus :  (state, action)=>{
            state.isAdmin=true;
           
        },

    }
})

export const {login, adminStatus} =authSlice.actions;
export default authSlice.reducer;