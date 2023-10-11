import React, { FC } from 'react'
import { StyledContent } from '../../../shared/ui/styled/'
import { BookSearch } from '../../../widgets/books'

const SearchPage: FC = () => {
  return (
    <StyledContent>
      <BookSearch />
    </StyledContent>
  )
}

export default SearchPage
