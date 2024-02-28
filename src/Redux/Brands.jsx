import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = { brands: [], isloading: false, error: null }
export let getBrands = createAsyncThunk("brands/getBrands",
    async () => {
        let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
            .catch((err) => err);
        return data.data
    }
)

let brands = createSlice({
    name: "Brands",
    initialState,
    extraReducers: (bulider) => {
        bulider.addCase(getBrands.pending,(state)=>{
            state.isloading=true;
        } );
        bulider.addCase(getBrands.fulfilled,(state,action)=>{
            state.brands=action.payload;
            state.isloading=false;

        } );

    }
})

export let brandsReducer=brands.reducer;
