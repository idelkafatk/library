import { IBookItem } from '../../../types/books/api/IBookList'
import { BOOK_COVER_URL } from '../../../widgets/books/ui/BookList'
import { TypeBookCoverSize } from '../../../types'
import { IBook } from '../../../types/books/api/IBook'
import {
  IBookInfo,
  IBookInfoExtended,
} from '../../../types/books/api/IBookInfo'

export const makeBookItems = (books: IBook[]): IBookItem[] =>
  books.map((book) => ({
    id: book.key.replace('/works/', ''),
    cover_img: book.cover_i
      ? `${BOOK_COVER_URL}${book.cover_i}-${TypeBookCoverSize.L}.jpg`
      : undefined,
    title: book.title,
    author_name: book.author_name,
    first_publish_year: book.first_publish_year,
    ratings_average: book.ratings_average,
  }))

export const extendBookInfo = (bookInfo: IBookInfo): IBookInfoExtended => {
  const text =
    typeof bookInfo.description === 'string'
      ? bookInfo.description
      : bookInfo.description?.value

  const descr =
    text &&
    text
      .replace(/-{10}[\s\S]*$/, '')
      .replace(/\(?\[[sS]ource]\[\d+]([\s\S]*\[\d+])?\)?:?[\s\S]*$/, '')

  return {
    ...bookInfo,
    description: descr,
    genres: bookInfo.subjects?.slice(0, 5),
    rate: bookInfo.summary.average,
    cover_img: bookInfo.covers?.length
      ? `${BOOK_COVER_URL}${bookInfo.covers[0]}-${TypeBookCoverSize.L}.jpg`
      : undefined,
  }
}
