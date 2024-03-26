import { IsEmpty } from '@/shared/components/IsEmpty'
import { useTranslation } from '@/shared/hooks/useTranslation'

import { GetPostsQuery } from '../../api/getPosts.api.types'
import { PostItem } from '../../ui/PostItem'
import { PostsListStyled } from './PostsList.styled'

type PostsListType = {
  posts: GetPostsQuery['getPosts']['items']
}
export const PostsList = ({ posts }: PostsListType) => {
  const { t } = useTranslation()

  if (posts && posts?.length) {
    return (
      <PostsListStyled>
        {posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </PostsListStyled>
    )
  }

  return <IsEmpty text={t.posts_list.not_posts} />
}
