import { createSlice } from '@reduxjs/toolkit'

const initialState = { value : [] }

export const basketSlice = createSlice({
  name : "basket",
  initialState : { value : initialState.value },
  reducers : {
    addToBasket : (state, action) =>{
      state.value = [...state.value , action.payload]
    },
    removeFromBasket : (state, action) =>{
      const index = state.value.findIndex((item)=> item.id === action.payload.id)
      let newBasket = [...state.value]
      if (index >= 0){
        newBasket.splice(index, 1)
      }
      state.value = newBasket
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer
