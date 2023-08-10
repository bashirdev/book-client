import { configureStore } from '@reduxjs/toolkit'
import { bookSlice } from './features/bookSlice'
import SearchSlice from './features/SearchSlice'
import userSlice from './user/userSlice'


 const store = configureStore({
  reducer: {
    user:userSlice,
    searchItem:SearchSlice,
    [bookSlice.reducerPath]: bookSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store