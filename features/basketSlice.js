import { createSlice } from '@reduxjs/toolkit'

const initialState = { value : [] }

export const basketSlice = createSlice({
  name : "basket",
  initialState : { value : initialState.value },
  reducers : {
    addToBasket : (state, action) =>{
      state.value = [...state.value , action.payload]
    },
  },
})

export const { addToBasket } = basketSlice.actions

export default basketSlice.reducer
