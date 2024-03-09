import { GetPostsQuery } from '@/entities/postsList/api/getPosts.api.types'
import { PostItem } from '@/entities/postsList/ui/PostItem/PostItem'
import { IsEmpty } from '@/shared/components/IsEmpty'
import { useTranslation } from '@/shared/hooks/useTranslation'

import { PostsListSkeleton } from '../PostsListSkeleton'
import { PostsListStyled } from './PostsList.styled'

type PostsListType = {
  loading: boolean
  posts?: GetPostsQuery['getPosts']['items']
}
export const PostsList = ({ loading, posts }: PostsListType) => {
  const { t } = useTranslation()

  if (loading) {
    return <PostsListSkeleton />
  }

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
