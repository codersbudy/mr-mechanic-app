import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice(
    {
    name:'shopkeeper',
    initialState:{
        currentShopkeeper:null,
        // customerBookingHistory:[],
    },
    reducers:{
        setShopkeeper:(state,action)=>{
            state.currentShopkeeper=action.payload;
        },
        // setCustomerBookingHistory:(state,action)=>{
        //     state.customerBookingHistory=action.payload;
        // }
    }
    
}
)
// export const {setCustomerBookingHistory}=slice.actions;
export const {setShopkeeper}=slice.actions;
export default slice.reducer;
