import React from 'react'
import { StyledContent } from '../../../shared/ui/styled'
import { CustomEmpty } from '../../../shared/ui/kit'

const FavouritePage = () => {
  return (
    <StyledContent>
      <CustomEmpty
        description={'Это заглушка для вкладки "Избранное"'}
        loading={false}
      />
    </StyledContent>
  )
}

export default FavouritePage
