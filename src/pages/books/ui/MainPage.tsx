import React from 'react'
import { CustomEmpty } from '../../../shared/ui/kit'
import { StyledContent } from '../../../shared/ui/styled'

const MainPage = () => {
  return (
    <StyledContent>
      <CustomEmpty
        description={'Это заглушка для вкладки "Главная"'}
        loading={false}
      />
    </StyledContent>
  )
}

export default MainPage
