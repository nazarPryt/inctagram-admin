import { GetPostsQuery } from '../../api/getPosts.api.types'
import { PostDescription } from '../../ui/PostDescription'
import { PostPhotos } from '../../ui/PostPhotos'
import { PostUserInfo } from '../../ui/PostUserInfo'
import { PostItemStyled } from './PostItem.styled'

type PostItemType = {
  post: GetPostsQuery['getPosts']['items'][number]
}
export const PostItem = ({ post }: PostItemType) => {
  return (
    <PostItemStyled>
      <PostPhotos photos={post.images} />
      <PostUserInfo userID={post.ownerId} />
      <PostDescription createdAt={post.createdAt} description={post.description} />
    </PostItemStyled>
  )
}
