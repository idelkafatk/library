import { IBook } from './IBook'

export interface IBookList {
  docs: IBook[]
}

export interface IBookItem {
  id: string
  title: string
  author_name: string
  first_publish_year: number
  ratings_average: string
  cover_img: string | undefined
}
