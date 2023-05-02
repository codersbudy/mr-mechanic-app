import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./customerSlice";
import shopkeeperSlice from "./shopkeeperSlice";
const store = configureStore({
    reducer:{
         customer: CustomerSlice,
         shopkeeper:shopkeeperSlice,
    }
}
);

export default store;