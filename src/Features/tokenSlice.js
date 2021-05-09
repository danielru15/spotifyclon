import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name:'token',
    initialState:{
        token:''
    },
    reducers:{
        getToken:(state,caption)=>{
            state.token=caption.payload
        }
    }
}) 
export default tokenSlice.reducer
export const {getToken} = tokenSlice.actions
export const tokenState = (state)=>{
return state.token
}