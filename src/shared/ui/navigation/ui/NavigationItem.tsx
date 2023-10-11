import { FC, ReactNode } from 'react'
import { styled } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { Space } from 'antd'

interface INavigationItemProps {
  icon: ReactNode
  title: string
  path: string
}

const StyledNavigationItem = styled.div<{
  active: string
}>`
  display: flex;
  width: 220px;
  height: 40px;
  padding-left: 10px;
  border-radius: 5px;
  background: transparent;
  margin: 5px 10px 0 10px;
  cursor: pointer;
  background: ${({ active }) => (active === 'true' ? '#282c35' : null)};

  &:hover {
    & span {
      color: white;
    }
    background: #282c35;
  }
`

export const NavigationItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const StyledTitle = styled.span<{
  active: string
}>`
  color: ${({ active }) => (active === `true` ? 'white' : '#333')};
  transition: color linear 0.1s;
`

export const NavigationItem: FC<INavigationItemProps> = ({
  icon,
  title,
  path,
}) => {
  const location = useLocation()
  const isCurrentPath = location.pathname === path

  return (
    <Link to={path}>
      <NavigationItemContainer>
        <StyledNavigationItem active={`${isCurrentPath}`}>
          <Space size={8}>
            {icon}
            <StyledTitle active={`${isCurrentPath}`}>{title}</StyledTitle>
          </Space>
        </StyledNavigationItem>
      </NavigationItemContainer>
    </Link>
  )
}
