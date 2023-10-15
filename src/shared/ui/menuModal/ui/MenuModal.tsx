import React, { FC } from 'react'
import { styled } from 'styled-components'
import { NavigationContainer } from '../../navigation'
import { SearchContainer } from '../../search'

interface IMenuModalProps {
  showMenuModal: boolean
  setShowMenuModal: (val: boolean) => void
}

const SidebarContainer = styled.div<{ open: boolean }>`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? '0' : '-300px')};
  width: 250px;
  height: 100%;
  background: white;
  transition: left 1s;
  z-index: 999;
  padding: 10px 0 10px 0;

  @media (min-width: 1024px) {
    display: none;
  }
`

const SearchWrapper = styled.div`
  max-width: 200px;
  border: 0;
  justify-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const MenuModal: FC<IMenuModalProps> = ({ showMenuModal }) => {
  return (
    <SidebarContainer open={showMenuModal}>
      <SearchWrapper>
        <SearchContainer />
      </SearchWrapper>

      <NavigationContainer />
    </SidebarContainer>
  )
}
