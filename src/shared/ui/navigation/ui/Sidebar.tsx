import React, { FC } from 'react'
import { styled } from 'styled-components'
import '../../../../app/styles/antCustomStyles.less'
import { Layout } from 'antd'
import { NavigationContainer } from '../index'

const { Sider } = Layout

const StyledSider = styled(Sider)`
  background: transparent;
  border-right: 10px #282c35;
  display: flex;
`

export const Sidebar: FC = () => {
  return (
    <>
      <StyledSider width={250}>
        <NavigationContainer />
      </StyledSider>
    </>
  )
}
