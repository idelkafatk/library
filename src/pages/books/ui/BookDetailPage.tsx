import React, { FC } from 'react'
import { BookDetail } from '../../../widgets/books'
import { StyledContent } from '../../../shared/ui/styled'

const BookDetailPage: FC = () => {
  return (
    <StyledContent>
      <BookDetail />
    </StyledContent>
  )
}

export default BookDetailPage
