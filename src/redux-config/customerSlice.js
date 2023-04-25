import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'customer',
    initialState:{
        currentCustomer:null
    },
    reducers:{
        setCustomer:(state,action)=>{
            state.currentCustomer=action.payload;
        }
    }
})

export const {setCustomer}=slice.actions;
export default slice.reducer;
