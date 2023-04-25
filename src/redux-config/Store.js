import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./customerSlice";
const store = configureStore({
    reducer:{
         customer: CustomerSlice,
    }
}
);

export default store;