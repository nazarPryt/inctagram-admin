import { PostDescriptionStyled } from '@/entities/postsList/ui/PostDescription/PostDescription.styled'
import { ReadMore } from '@nazar-pryt/inctagram-ui-kit'
import { formatDistance } from 'date-fns/formatDistance'
import { subDays } from 'date-fns/subDays'

type PostDescriptionType = {
  createdAt: string
  description: string
}
export const PostDescription = ({ createdAt, description }: PostDescriptionType) => {
  const day = formatDistance(subDays(new Date(+createdAt), 1), new Date(), {
    addSuffix: true,
  })

  return (
    <PostDescriptionStyled>
      <span className={'day'}>{day}</span>
      <p>
        <ReadMore maxLength={80} text={description} />
      </p>
    </PostDescriptionStyled>
  )
}
