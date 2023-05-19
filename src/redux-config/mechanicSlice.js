import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice(
    {
    name:'mechanic',
    initialState:{
        currentMechanic:null,
    },
    reducers:{
        setMechanic:(state,action)=>{
            state.currentMechanic=action.payload;
        },
    }
    
}
)
export const {setMechanic}=slice.actions;
export default slice.reducer;
