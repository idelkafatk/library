import React, { FC } from 'react'
import { IBookItem } from '../../../types/books/api/IBookList'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { StyledCard } from '../../../shared/ui/styled'
import { StyledMeta } from '../../../shared/ui/styled/ui/StyledMeta'
import { Tooltip } from 'antd'
import { BookPicture } from './BookPicture'

interface IBookCardProps {
  bookItem: IBookItem
}

export const BookCard: FC<IBookCardProps> = ({ bookItem }) => {
  const { id, title, cover_img } = bookItem

  const picture = <BookPicture picture={cover_img} title={title} />
  return (
    <CSSTransition classNames="item" timeout={500}>
      <Link to={`/book/${id}`}>
        <StyledCard bordered={false} hoverable cover={picture}>
          <StyledMeta
            title={
              <Tooltip placement="topLeft" color="black" title={title}>
                <span>{title}</span>
              </Tooltip>
            }
          />
        </StyledCard>
      </Link>
    </CSSTransition>
  )
}
