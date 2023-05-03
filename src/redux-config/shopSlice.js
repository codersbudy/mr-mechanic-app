import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../WebApi/api";

export const fetchShop=createAsyncThunk("shop",async()=>{
    // window.alert("inner fetchshop function");
    let response=await axios.get(api.SHOP_LIST);
    if(response.data){
      return response.data;
      
    }
})

const slice=createSlice({
    name:"shop",
    initialState:{
    shopList:[],
    isLoading:false,
    error:null
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchShop.pending,(state,action)=>{
            state.isLoading=true;
        }).addCase(fetchShop.fulfilled,(state,action)=>{
            state.shopList=action.payload.result;
            state.isLoading=false;
        }).addCase(fetchShop.rejected,(state,action)=>{
            state.isLoading=false;
            state.error="oops something went wrong "
        })

    }
})


export default slice.reducer;