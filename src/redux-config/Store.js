import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./customerSlice";
import shopkeeperSlice from "./shopkeeperSlice";
import shopSlice from "./shopSlice";
import categorySlice from "./categorySlice";
import mechanicSlice from "./mechanicSlice";
const store = configureStore({
    reducer:{
         customer: CustomerSlice,
         shopkeeper:shopkeeperSlice,
         categories:categorySlice,
         shop:shopSlice,
         mechanic:mechanicSlice,
    }
}
);

export default store;