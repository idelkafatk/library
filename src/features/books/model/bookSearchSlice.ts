import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BookService } from '../../../entities'
import { IBook } from '../../../types/books/api/IBook'
import { IBookList } from '../../../types/books/api/IBookList'

interface ISearchQuery {
  status: string
  books?: IBook[]
}

const initialState: ISearchQuery = {
  status: '',
}

export const searchBooks = createAsyncThunk<IBookList, string>(
  'books/searchBooks',
  async (q: string) => {
    const response = await BookService.searchBooks(q)

    return response.data
  },
)

export const bookSearch = createSlice({
  name: 'bookSearch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.books = action.payload.docs
        state.status = 'idle'
      })
      .addCase(searchBooks.rejected, (state) => {
        state.status = 'error'
      })
  },
})
