import { PostDescription } from '@/entities/postsList/ui/PostDescription/PostDescription'
import { PostItemStyled } from '@/entities/postsList/ui/PostItem/PostItem.styled'
import { PostPhotos } from '@/entities/postsList/ui/PostPhotos/PostPhotos'
import { PostUserInfo } from '@/entities/postsList/ui/PostUserInfo/PostUserInfo'

const fakedata =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut sed eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed do.'

type PostItemType = {
  // postData: GetPostsQuery['getPosts']['items']
  postData: any
}
export const PostItem = ({ postData }: PostItemType) => {
  return (
    <PostItemStyled>
      <PostPhotos photos={postData} />
      <PostUserInfo />
      <PostDescription createdAt={'2023-07-14T14:50:09.268Z'} description={fakedata} />
    </PostItemStyled>
  )
}
