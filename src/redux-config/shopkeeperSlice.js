import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice(
    {
    name:'shopkeeper',
    initialState:{
        currentShopkeeper:null,
        shops:[],
        totalMechanics:[]
    },
    reducers:{
        setShopkeeper:(state,action)=>{
            state.currentShopkeeper=action.payload;
        },
        setShops:(state,action)=>{
            state.shops=action.payload;
        },
        setMechanics:(state,action)=>{
            state.totalMechanics=action.payload;
        }
    }
    
}
)
export const {setShopkeeper,setShops,setMechanics}=slice.actions;
export default slice.reducer;
