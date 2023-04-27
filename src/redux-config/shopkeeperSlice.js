import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'shopkeeper',
    initialState:{
        currentShopkeeper:null
    },
    reducers:{
        setshopkeeper:(state,action)=>{
            state.currentShopkeeper=action.payload;
        }
    }
})

export const {setshopkeeper}=slice.actions;
export default slice.reducer;