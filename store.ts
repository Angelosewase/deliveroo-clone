import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '@/features/basketSlice'
import restaurantSlice from './features/restaurantSlice'

export const store = configureStore({
  reducer: {
    basket:basketReducer,
    restaurant:restaurantSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch