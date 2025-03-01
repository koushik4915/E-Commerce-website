
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'product',
  initialState:{
    slice:[],
    loading:false,
    error:''
  },
  reducers:{
    updateallProducts(state,action){
      state.slice = action.payload
      state.loading = false
    },
    fetchProducts(state){
      state.loading = true
    },
    fetchError(state, action){
      state.loading = false
      state.error = action.payload || "Something went wrong!"
    }
  }
})

export const {updateallProducts, fetchProducts, fetchError} = slice.actions

export default slice.reducer

