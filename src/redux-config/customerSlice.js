import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice(
    {
    name:'customer',
    initialState:{
        currentCustomer:null,
        customerBookingHistory:[],
    },
    reducers:{
        setCustomer:(state,action)=>{
            state.currentCustomer=action.payload;
        },
        setCustomerBookingHistory:(state,action)=>{
            state.customerBookingHistory=action.payload;
        }
    }
    
}
)
export const {setCustomerBookingHistory}=slice.actions;
export const {setCustomer}=slice.actions;
export default slice.reducer;
