import { FC } from 'react'
import { styled } from 'styled-components'
import { Empty, Spin } from 'antd'

interface IEmpty {
  description: string
  loading: boolean
}

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #fff;
`

export const CustomEmpty: FC<IEmpty> = ({ description, loading }) => {
  return (
    <EmptyContainer>
      {loading ? (
        <Spin />
      ) : (
        <Empty
          description={<span style={{ color: '#282c35' }}>{description}</span>}
          imageStyle={{ color: '#282c35' }}
        />
      )}
    </EmptyContainer>
  )
}
