import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from '../Features/tokenSlice'
// es un metodo que recibe un objeto 
export const store = configureStore({
    reducer:{
        token:tokenReducer
    }
})