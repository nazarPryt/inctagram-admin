import { GetPostsQuery } from '@/entities/postsList/api/getPosts.api.types'
import { PostItem } from '@/entities/postsList/ui/PostItem/PostItem'

import { PostsListStyled } from './PostsList.styled'

type PostsListType = {
  posts: any
}
export const PostsList = ({ posts }: PostsListType) => {
  return (
    <PostsListStyled>
      {/*{posts.getPosts.items.map((post, index) => (*/}
      {/*  <PostItem key={index} postData={post} />*/}
      {/*))}*/}
      <PostItem postData={''} />
      <PostItem postData={''} />
      <PostItem postData={''} />
      <PostItem postData={''} />
      <PostItem postData={''} />
      <PostItem postData={''} />
      <PostItem postData={''} />
      <PostItem postData={''} />
      <PostItem postData={''} />
    </PostsListStyled>
  )
}
