import { styled } from 'styled-components'
import React, { FC } from 'react'
import { NavigationItem } from './NavigationItem'
import { FcHome, FcLike, FcSearch } from 'react-icons/fc'

const StyledNavigationItems = styled.div`
  background: transparent;
  border: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const NavigationContainer: FC = () => {
  return (
    <StyledNavigationItems>
      <NavigationItem icon={<FcHome />} title={'Главная'} path={'/'} />
      <NavigationItem icon={<FcSearch />} title={'Поиск'} path={'/search'} />
      <NavigationItem
        icon={<FcLike />}
        title={'Избранное'}
        path={'/favourite'}
      />
    </StyledNavigationItems>
  )
}
