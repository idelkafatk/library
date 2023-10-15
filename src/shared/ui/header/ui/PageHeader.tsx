import React, { FC, useState } from 'react'
import { styled } from 'styled-components'
import { BiLibrary } from 'react-icons/bi'
import { SearchContainer } from '../../search/'
import Title from 'antd/es/typography/Title'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { MenuModal } from '../../menuModal'

const ICON_SIZE = '36px'

const StyledHeader = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  margin: 15px 0;
  flex: 0;
`
const StyledLogoWrapper = styled.div`
  display: flex;
`

const StyledBurgerIcon = styled(GiHamburgerMenu)`
  @media (min-width: 1024px) {
    display: none;
  }
`

const StyledCloseIcon = styled(AiOutlineClose)`
  @media (min-width: 1024px) {
    display: none;
  }
`
const ToggleIcon = styled.div`
  cursor: pointer;
`

const SearchWrapper = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`
export const PageHeader: FC = () => {
  const [showMenuModal, setShowMenuModal] = useState<boolean>(false)

  return (
    <StyledHeader>
      <Link to={'/'}>
        <StyledLogoWrapper>
          <BiLibrary
            type={'logo'}
            size={ICON_SIZE}
            title="Library"
            style={{ marginLeft: 15, color: '#282c35' }}
          />
          <Title
            style={{
              margin: 0,
              whiteSpace: 'nowrap',
              flex: 1,
              color: '#282c35',
            }}
            level={2}
          >
            Library
          </Title>
        </StyledLogoWrapper>
      </Link>
      <SearchWrapper>
        <SearchContainer />
      </SearchWrapper>
      <ToggleIcon>
        {!showMenuModal && (
          <StyledBurgerIcon
            size={ICON_SIZE}
            style={{ color: '#282c35', marginRight: '15px' }}
            onClick={() => setShowMenuModal(true)}
          />
        )}
        {showMenuModal && (
          <StyledCloseIcon
            size={ICON_SIZE}
            style={{ color: '#282c35', marginRight: '15px' }}
            onClick={() => setShowMenuModal(false)}
          ></StyledCloseIcon>
        )}
      </ToggleIcon>

      <MenuModal
        showMenuModal={showMenuModal}
        setShowMenuModal={setShowMenuModal}
      />
    </StyledHeader>
  )
}
