import { createSlice } from "@reduxjs/toolkit";
import { AnyObject, CounterState } from "./basketSlice";

const initialState:AnyObject = {
  restaurant:{
    id:null,
    imgUrl:null,
    title:null,
    rating:null,
    address:null,
    short_description:null,
    dishes:null
  }
};


export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant:(state,action)=>{
        state.restaurant=action.payload;
    }
}
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;
export const selectRestaurant  = (state: any) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
