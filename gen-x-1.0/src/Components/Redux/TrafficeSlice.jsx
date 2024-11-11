import { createSlice } from "@reduxjs/toolkit";


const TrafficSlice = createSlice({
    name : "Traffic",
    initialState : { color : "Blue" },
    reducers : {
        stop : (state) =>{
            state.color = "Red"
        },
        go : (state) =>{
            state.color = "Green"
        },
        reset : (state) =>{
            state.color = "Blue"
        },

    }
})

export const {stop , go , reset} = TrafficSlice.actions

export default TrafficSlice.reducer

