import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface CounterState {
  items:Array<any>
}

export interface AnyObject{
    [key:string]:any
}

const initialState: CounterState = {
    items:[],
  }
  
  export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
      addToBasket: (state,action) => {
        state.items= [...state.items,action.payload]    
      },
      removeFromBasket: (state,action) => {
         const index=state.items.findIndex((item) => item.id === action.payload.id)

           let newBasket =[...state.items]
           if( index >= 0){
            newBasket.splice(index,1)
           }else{
            console.log( `id:${action.payload.id} is not in the basket`)
           }


          state.items= newBasket
      },
  
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addToBasket, removeFromBasket } = basketSlice.actions
  export const selectBasketItems =(state:any)=>state.basket.items
  export const selectBasketItemsWithId =(state:AnyObject,id:string)=> state.basket.items.filter((item:any) => item.id === id)

export const selectBasketTotal =(state:AnyObject)=>state.basket.items.reduce((total:number,item:AnyObject)=>total + item.price,0)
  export default basketSlice.reducer