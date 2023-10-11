import { configureStore } from '@reduxjs/toolkit'
import { bookSearch, bookInfo } from '../../../features/books'

export const store = configureStore({
  reducer: {
    bookSearch: bookSearch.reducer,
    bookInfo: bookInfo.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
