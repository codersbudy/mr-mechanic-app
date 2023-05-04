import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice(
    {
    name:'customer',
    initialState:{
        currentCustomer:null,
        customerBookingHistory:[],
        currentLocation:null,
        latLong:null,
        customerVerify:false,
    },
    reducers:{
        setCustomer:(state,action)=>{
            state.currentCustomer=action.payload;
        },
        setCustomerBookingHistory:(state,action)=>{
            state.customerBookingHistory=action.payload;
        },
        setCurrentLocation:(state,action)=>{
            state.currentLocation=action.payload;
        },
        setLatLong:(state,action)=>{
            state.latLong=action.payload
        },
    }
    
}
)
export const {customerVerify}=slice.actions;
export const {setLatLong}=slice.actions;
export const {setCurrentLocation}=slice.actions;
export const {setCustomerBookingHistory}=slice.actions;
export const {setCustomer}=slice.actions;
export default slice.reducer;
