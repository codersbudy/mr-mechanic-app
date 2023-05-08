import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice(
    {
    name:'shopkeeper',
    initialState:{
        currentShopkeeper:null,
    },
    reducers:{
        setShopkeeper:(state,action)=>{
            state.currentShopkeeper=action.payload;
        },
    }
    
}
)
export const {setShopkeeper}=slice.actions;
export default slice.reducer;
