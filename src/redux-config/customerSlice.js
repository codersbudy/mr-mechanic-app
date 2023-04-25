import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'customer',
    initialState:{
        currentCustomer:null
    },
    reducers:{
        setCustomer:(state,action)=>{
            // window.alert(action.payload.customerName);
            state.currentCustomer=action.payload;
        }
    }
})

export const {setCustomer}=slice.actions;
export default slice.reducer;
