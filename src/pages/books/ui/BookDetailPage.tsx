import React, { FC } from 'react'
import { BookDetail } from '../../../widgets/books'
import { StyledContent } from '../../../shared/ui/styled'

export const BookDetailPage: FC = () => {
  return (
    <StyledContent>
      <BookDetail />
    </StyledContent>
  )
}
