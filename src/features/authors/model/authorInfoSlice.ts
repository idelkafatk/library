import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AuthorService } from '../../../entities'
import { IAuthorInfo } from '../../../types/authors/api/IAuthorInfo'

interface AuthorInfoState {
  data?: IAuthorInfo
  status: string
}

const initialState: AuthorInfoState = {
  status: 'idle',
}

export const getAuthorInfo = createAsyncThunk<IAuthorInfo, string>(
  'book/fetchAuthorInfo',
  async (authorId: string) => {
    const response = await AuthorService.getAuthorInfo(authorId)
    return response.data
  },
)

export const authorInfo = createSlice({
  name: 'authorInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAuthorInfo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAuthorInfo.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'idle'
      })
      .addCase(getAuthorInfo.rejected, (state) => {
        state.status = 'error'
      })
  },
})
