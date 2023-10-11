import { Layout, notification, Skeleton, Tag, Typography } from 'antd'
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
`

const CustomStyledImage = styled(StyledImage)`
  border-radius: 5px;
`

const StyledContent = styled(Content)`
  background-color: #fff;
  overflow: auto;
  height: 100vh;
  padding-bottom: 100px;
`

const StyledText = styled(Text)`
  color: #282c35;
`

const GenresContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 50px 0 50px;
`

const DescriptionContainer = styled.div`
  padding: 50px 50px 0 0;
`

export const BookDetail: FC = () => {
  const { bookId } = useParams<IParams>()
  const { data, status } = useTypedSelector((state) => state.bookInfo)
  const dispatch = useTypedDispatch()
  const isLoading = status === 'loading'

  useEffect(() => {
    dispatch(getBookInfo(bookId))
  }, [bookId])

  console.log(data)

  if (status === 'error') {
    return <ErrorBoundary />
  }

  const renderBookDetail = () => {
    const extendedData = data && extendBookInfo(data)
    const { title, description, authors, cover_img, summary, type, key } =
      extendedData || {}
    const image = isLoading ? (
      <Skeleton.Avatar
        shape="square"
        style={{ width: 220, height: 320, border: 5, borderRadius: 5 }}
        active
      />
    ) : (
      <CustomStyledImage preview={false} src={cover_img} alt={title} />
    )
    const showTitle = isLoading ? (
      <Skeleton.Input style={{ width: 300 }} active />
    ) : (
      title
    )
    const descr = isLoading ? (
      <Skeleton title={false} paragraph={{ rows: 3 }} active />
    ) : (
      description
    )
    // const showRate = isLoading ? (
    //   <BookRate rate={0}></BookRate>
    // ) : (
    //   <BookRate rate={parseFloat(summary!.average)}></BookRate>
    // )
    // const showGenres =
    //     isLoading ? null : (
    //     <GenresContainer>
    //       {genres?.map(({ mal_id, name }) => {
    //         return (
    //           <Tag
    //             color="black"
    //             style={{ borderRadius: 5, height: 20, marginBottom: 5 }}
    //             key={mal_id}
    //           >
    //             {name}
    //           </Tag>
    //         )
    //       })}
    //     </GenresContainer>
    //   )

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
          </LeftCol>
          <RightCol>
            <DescriptionContainer>
              <StyledText>{description}</StyledText>
            </DescriptionContainer>
          </RightCol>
        </ContentContainer>
      </StyledContent>
    )
  }

  const bookDetail = renderBookDetail()

  return <>{bookDetail}</>
}
