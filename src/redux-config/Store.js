import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./customerSlice";
import shopkeeperSlice from "./shopkeeperSlice";
import shopSlice from "./shopSlice";
import categorySlice from "./categorySlice";
// import adminSlice from "./adminSlice"
import adminSlice from "./adminSlice"
const store = configureStore({
    reducer: {
        customer: CustomerSlice,
        shopkeeper: shopkeeperSlice,
        shop: shopSlice,
        categories: categorySlice,
        admin: adminSlice,
    }
}
);

export default store;