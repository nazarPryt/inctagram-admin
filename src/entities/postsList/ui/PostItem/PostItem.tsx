import { GetPostsQuery } from '@/entities/postsList/api/getPosts.api.types'
import { PostDescription } from '@/entities/postsList/ui/PostDescription/PostDescription'
import { PostItemStyled } from '@/entities/postsList/ui/PostItem/PostItem.styled'
import { PostPhotos } from '@/entities/postsList/ui/PostPhotos/PostPhotos'
import { PostUserInfo } from '@/entities/postsList/ui/PostUserInfo/PostUserInfo'

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
