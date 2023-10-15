import React, { FC, useEffect, useMemo, useState } from 'react'
import { makeBookItems, useTypedSelector } from '../../../shared/lib'
import { CustomEmpty } from '../../../shared/ui/kit'
import { IBookItem } from '../../../types/books/api/IBookList'
import { BookList } from './BookList'

const BookSearch: FC = () => {
  const { status, books } = useTypedSelector((state) => state.bookSearch)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const startSearchText = 'Введите данные для поиска...'
  const notFoundText = 'Ничего не найдено...'

  const bookItems: IBookItem[] | undefined = useMemo(() => {
    if (books) {
      return makeBookItems(books)
    } else {
      return undefined
    }
  }, [books])

  useEffect(() => {
    switch (status) {
      case 'loading':
        setIsLoading(true)
        break
      case 'error':
        setIsLoading(false)
        setIsError(true)
        break
      default:
        setIsError(false)
        setIsLoading(false)
    }
  }, [status])

  return isLoading || !books?.length ? (
    <CustomEmpty
      description={books && !books.length ? notFoundText : startSearchText}
      loading={isLoading}
    />
  ) : (
    <BookList bookList={bookItems} isError={isError} />
  )
}

export default BookSearch
