import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



let initialState = { Categories: [], isloading: false, error: null }

export let getCategories = createAsyncThunk("Categories/getCategories",
    async () => {
        let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
            .catch((err) => err);
        return data.data
    }
)
export let getSubCategories = createAsyncThunk("Categories/getSubCategories",
    async (id) => {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
            .catch((err) => err);
        return data.data
    }
)

let Categories = createSlice({
    name: 'Categories',
    initialState,
    extraReducers: (bulider) => {
        bulider.addCase(getCategories.pending, (state) => {
            state.isloading = true;
        });
        bulider.addCase(getCategories.fulfilled, (state, action) => {
            state.Categories = action.payload;
            state.isloading = false;

        });
        bulider.addCase(getSubCategories.pending, (state) => {
            state.isloading = true;
        });
        bulider.addCase(getSubCategories.fulfilled, (state, action) => {
            state.Categories = action.payload;
            state.isloading = false;

        });

    }

});

export let categoriesReducer = Categories.reducer;