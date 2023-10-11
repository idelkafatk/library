import { IBookItem } from '../../../types/books/api/IBookList'
import { FC } from 'react'
import { styled } from 'styled-components'
import { Alert } from 'antd'
import { TransitionGroup } from 'react-transition-group'
import { BookCard } from '../../../features/books'

export const BOOK_COVER_URL = 'https://covers.openlibrary.org/b/id/'

interface IBookListProps {
  bookList?: IBookItem[]
  isLoading?: boolean
  isError?: boolean
}

const StyledContainer = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 10px 50px 10px;
  background-color: #fff;
  overflow-y: auto;
  gap: 20px;
`

const StyledBookList = styled.div`
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const BookList: FC<IBookListProps> = ({ bookList, isError }) => {
  if (isError) {
    return (
      <Alert
        style={{
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
        }}
        message="Ошибка загрузки"
        type="error"
      />
    )
  }

  console.log('--- render BookList ---')
  const renderBookCards = (): JSX.Element => {
    return (
      <StyledBookList>
        <TransitionGroup component={null}>
          {bookList?.map((bookItem: IBookItem, index: number) => (
            <BookCard bookItem={bookItem} key={index} />
          ))}
        </TransitionGroup>
      </StyledBookList>
    )
  }

  const renderedBookList = renderBookCards()
  return <StyledContainer>{renderedBookList}</StyledContainer>
}
