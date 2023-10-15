import { AxiosResponse } from 'axios'
import { IBookList } from '../../../types/books/api/IBookList'
import { IBookInfo } from '../../../types/books/api/IBookInfo'
import { libraryApi } from '../../../shared/api'

export const BookService = {
  async searchBooks(q: string): Promise<AxiosResponse<IBookList>> {
    return libraryApi.get('search.json', {
      params: {
        q,
      },
    })
  },

  async getBookInfo(bookId: string): Promise<{
    bookInfo: AxiosResponse<IBookInfo>
    bookRating: AxiosResponse<IBookInfo>
  }> {
    const [bookInfo, bookRating] = await Promise.all([
      libraryApi.get(`works/${bookId}.json`),
      libraryApi.get(`works/${bookId}/ratings.json`),
    ])

    return {
      bookInfo,
      bookRating,
    }
  },
}
