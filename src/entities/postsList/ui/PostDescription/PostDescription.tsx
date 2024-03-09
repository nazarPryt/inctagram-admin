import { useFormatDistance } from '@/shared/hooks/useFormatDistance'
import { ReadMore } from '@nazar-pryt/inctagram-ui-kit'

import { PostDescriptionStyled } from './PostDescription.styled'

type PostDescriptionType = {
  createdAt: string
  description: string
}
export const PostDescription = ({ createdAt, description }: PostDescriptionType) => {
  const day = useFormatDistance(createdAt)

  return (
    <PostDescriptionStyled>
      <span className={'day'}>{day}</span>
      <p>
        <ReadMore maxLength={80} text={description} />
      </p>
    </PostDescriptionStyled>
  )
}
