import { configureStore } from "@reduxjs/toolkit";
import { CounterReducers } from "./Counter";
import { brandsReducer } from "./Brands";
import { categoriesReducer } from "./Categories";



export let store=configureStore({
    reducer:{
        count:CounterReducers,
        brand:brandsReducer,
        categorie:categoriesReducer
    }
})