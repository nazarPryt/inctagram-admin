import { useTranslation } from '@/shared/hooks/useTranslation'

import { NoPostsWrapper } from './NoPosts.styled'
import { NoPostsIcon } from './icon/NoPostsIcon'

export const NoPosts = () => {
  const { t } = useTranslation()

  return (
    <NoPostsWrapper>
      <NoPostsIcon />
      <h1>{t.post.no_posts}</h1>
    </NoPostsWrapper>
  )
}
