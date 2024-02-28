import { createSlice } from "@reduxjs/toolkit";

let initialState = { count: 0, userName: '' }
let counter = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        increase: (state) => {
            state.count = +1
        },
        decrease: (state) => {
            state.count = -1
        }
    }
})

export let CounterReducers=counter.reducer;
export let {increase,decrease}=counter.actions;