import { IAuthor } from '../../authors/api/IAuthor'

export interface IBookInfo {
  title: string
  key: string
  authors: IAuthor[]
  type: {
    key: string
  }
  description: IBookDescription | string
  covers: number[]
  subjects?: string[]
  summary: {
    average: string
  }
}

export interface IBookInfoExtended extends IBookInfo {
  description: string
  rate: string
  genres?: string[]
  cover_img: string | undefined
}

interface IBookDescription {
  type: string
  value: string
}
