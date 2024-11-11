// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import CounterReducer from './CounterSlice';



// // Create a Redux store
// const store = configureStore({
//   reducer: {
//     counter: CounterReducer, // Add the counter slice reducer
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";

import TrafficeReducer from "./TrafficeSlice"

const store =configureStore({
    reducer : {
        traffice : TrafficeReducer
    }
})

export default store

