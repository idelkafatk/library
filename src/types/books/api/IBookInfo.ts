import { IAuthor } from '../../authors/api/IAuthor'

export interface IBookInfo {
  title: string
  key: string
  authors: IAuthor[]
  type: {
    key: string
  }
  description: string
  covers: number[]
  summary: {
    average: string
  }
}

export interface IBookInfoExtended extends IBookInfo {
  cover_img: string | undefined
}
