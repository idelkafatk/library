import React, { FC } from 'react'
import { Skeleton } from 'antd'
import { StyledImage } from '../../../shared/ui/styled'

interface IBookPictureProps {
  picture: string | undefined
  title: string
}

const CustomSkeletonImage = () => (
  <Skeleton.Image style={{ width: 220, height: 320, border: 5 }} />
)

export const BookPicture: FC<IBookPictureProps> = ({ title, picture }) => {
  if (!picture) return <CustomSkeletonImage />

  let errorImg = false

  const img = new Image()
  img.src = picture

  img.onerror = function () {
    errorImg = true
  }

  return errorImg ? (
    <CustomSkeletonImage />
  ) : (
    <StyledImage preview={false} alt={title} src={picture} />
  )
}
