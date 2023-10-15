import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BookService } from '../../../entities'
import { IBookInfo } from '../../../types/books/api/IBookInfo'

interface BookInfoState {
  data?: IBookInfo
  status: string
}

const initialState: BookInfoState = {
  status: 'idle',
}

export const getBookInfo = createAsyncThunk<IBookInfo, string>(
  'book/fetchBookInfo',
  async (bookId: string) => {
    const { bookInfo, bookRating } = await BookService.getBookInfo(bookId)
    return {
      ...bookInfo.data,
      ...bookRating.data,
    }
  },
)

export const bookInfo = createSlice({
  name: 'bookInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookInfo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getBookInfo.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'idle'
      })
      .addCase(getBookInfo.rejected, (state) => {
        state.status = 'error'
      })
  },
})
