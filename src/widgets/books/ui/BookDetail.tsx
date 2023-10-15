import { Layout, Skeleton, Tag, Typography } from 'antd'
import { styled } from 'styled-components'
import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { StyledImage } from '../../../shared/ui/styled'
import { IParams } from '../../../types/IParams'
import { StyledTitle } from '../../../shared/ui/styled/ui/StyledTitle'
import { BookRate } from '../../../features/books/ui/BookRate'
import {
  extendBookInfo,
  useTypedDispatch,
  useTypedSelector,
} from '../../../shared/lib'
import { getBookInfo } from '../../../features/books/model/bookInfoSlice'
import { CustomSkeletonImage } from '../../../features/books'

const { Content } = Layout
const { Text } = Typography

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const RightCol = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 30px;
  width: 100vw;
`

const ImageContainer = styled.div`
  background: #fff;
  padding: 50px 50px 0 50px;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 0 50px;
  }
`

const TitleContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: end;
`

const ContentContainer = styled.div`
  display: flex;

  @media (max-width: 767px) {
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
  }
`

const CustomStyledImage = styled(StyledImage)`
  border-radius: 5px;
`

const StyledContent = styled(Content)`
  background-color: #fff;
  overflow: auto;
  height: 100svh;
  padding-bottom: 100px;
`

const StyledText = styled(Text)`
  color: #282c35;
`

const Description: FC<{ descr: string | JSX.Element }> = ({ descr }) => {
  return (
    <DescriptionContainer>
      <StyledText>{descr}</StyledText>
    </DescriptionContainer>
  )
}

const GenresContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 50px 0 50px;
`

const DescriptionContainer = styled.div`
  padding: 50px 50px 0 0;

  @media (max-width: 767px) {
    padding: 25px 50px 0 50px;
  }
`

export const BookDetail: FC = () => {
  const { bookId } = useParams<IParams>()
  const { data, status } = useTypedSelector((state) => state.bookInfo)
  const dispatch = useTypedDispatch()
  const isLoading = status === 'loading'

  useEffect(() => {
    dispatch(getBookInfo(bookId))
  }, [bookId])

  if (status === 'error') {
    return <ErrorBoundary>Произошла ошибка</ErrorBoundary>
  }

  const renderBookDetail = () => {
    const extendedData = data && extendBookInfo(data)
    const { title, description, rate, cover_img, genres } = extendedData || {}

    const image = isLoading ? (
      <Skeleton.Avatar
        shape="square"
        style={{ width: 220, height: 320, border: 5, borderRadius: 5 }}
        active
      />
    ) : cover_img ? (
      <CustomStyledImage preview={false} src={cover_img} alt={title} />
    ) : (
      <CustomSkeletonImage />
    )

    const showTitle = isLoading ? (
      <Skeleton.Input style={{ width: 300 }} active />
    ) : (
      title
    )

    const descr = isLoading ? (
      <Skeleton title={false} paragraph={{ rows: 3 }} active />
    ) : (
      description || 'Информация о книге отсутствует.'
    )

    const showRate =
      isLoading || !rate ? (
        <BookRate rate={0}></BookRate>
      ) : (
        <BookRate rate={parseFloat(rate)}></BookRate>
      )

    const showGenres = isLoading ? null : (
      <GenresContainer>
        {genres?.map((genre, i) => {
          return (
            <Tag
              color="black"
              style={{ borderRadius: 5, height: 20, marginBottom: 5 }}
              key={i}
            >
              {genre}
            </Tag>
          )
        })}
      </GenresContainer>
    )

    return (
      <StyledContent>
        <TitleContainer>
          <StyledTitle style={{ margin: 0 }} level={2}>
            {showTitle}
          </StyledTitle>
        </TitleContainer>
        <ContentContainer>
          <LeftCol>
            <ImageContainer>{image}</ImageContainer>
            {showGenres}
            {showRate}
          </LeftCol>
          <RightCol>
            <Description descr={descr}></Description>
          </RightCol>
        </ContentContainer>
      </StyledContent>
    )
  }

  const bookDetail = renderBookDetail()

  return <>{bookDetail}</>
}
