import { Input, Tooltip } from 'antd'
import { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { styled } from 'styled-components'
import { useTypedDispatch } from '../../../lib/'
import { searchBooks } from '../../../../features/books/model/bookSearchSlice'

const { Search } = Input

const StyledSearch = styled(Search)`
  max-width: 300px;

  & input {
    border-radius: 50px;
  }
`

const StyledSearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex: 1;
`

export const SearchContainer: FC = () => {
  const dispatch = useTypedDispatch()
  const [searchError, setSearchError] = useState<boolean>(false)
  const history = useHistory()

  const handleSearchQuery = async (value: string) => {
    const englishReg = /^[a-zA-Z\s]+$/

    if (value.length >= 1 && englishReg.test(value)) {
      setSearchError(false)
      dispatch(searchBooks(value))
      history.push('/search')
    } else {
      setSearchError(true)

      setTimeout(() => {
        setSearchError(false)
      }, 3500)
    }
  }

  const handleInputBlur = () => {
    setSearchError(false)
  }

  return (
    <StyledSearchContainer>
      <Tooltip title="Введите минимум 1 букву на английском" open={searchError}>
        <StyledSearch
          placeholder="Введите название книги"
          enterButton
          size="large"
          onSearch={handleSearchQuery}
          onBlur={handleInputBlur}
        />
      </Tooltip>
    </StyledSearchContainer>
  )
}
