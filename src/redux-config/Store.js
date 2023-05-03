import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./customerSlice";
import shopkeeperSlice from "./shopkeeperSlice";
import shopSlice from "./shopSlice";
const store = configureStore({
    reducer:{
         customer: CustomerSlice,
         shopkeeper:shopkeeperSlice,
         shop:shopSlice,
    }
}
);

export default store;