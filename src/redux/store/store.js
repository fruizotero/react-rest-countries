import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/filterSlice";

export const store = configureStore({
    reducer: {
        filter: filterSlice
    }
});