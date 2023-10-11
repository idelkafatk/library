import React, { FC } from 'react'
import { styled } from 'styled-components'
import { BiLibrary } from 'react-icons/bi'
import { SearchContainer } from '../../search/'
import Title from 'antd/es/typography/Title'
import { Link } from 'react-router-dom'

const LOGO_SIZE = '36px'

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

export const PageHeader: FC = () => {
  return (
    <StyledHeader>
      <Link to={'/'}>
        <StyledLogoWrapper>
          <BiLibrary
            type={'logo'}
            size={LOGO_SIZE}
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
      <SearchContainer />
    </StyledHeader>
  )
}
