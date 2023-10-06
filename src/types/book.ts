export type BookInfo = {
  bib_key: string
  info_url: string
  preview: string
  preview_url: string
  thumbnail_url: string
}

export type ISBNInfo = {
  [isbn: string]: BookInfo
}

export type CallbackArgument = {
  [key: string]: ISBNInfo
}
