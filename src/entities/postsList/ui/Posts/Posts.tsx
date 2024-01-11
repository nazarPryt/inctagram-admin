import React, { useState } from 'react'

import { useGetPostsQuery } from '@/entities/postsList/api/getPosts.api.types'
import { PostsStyled } from '@/entities/postsList/ui/Posts/Posts.styled'
import { PostsList } from '@/entities/postsList/ui/PostsList/PostsList'
import { SortDirection } from '@/shared/lib/ApolloClient/Schema.types'
import { InputText, Pagination } from '@nazar-pryt/inctagram-ui-kit'

export const Posts = () => {
  const [page, setPage] = useState(1)
  const { data, error, loading } = useGetPostsQuery({
    skip: true,
    variables: {
      endCursorPostId: 3,
      pageSize: 10,
      searchTerm: '',
      sortBy: '',
      sortDirection: SortDirection.Asc,
    },
  })

  return (
    <PostsStyled>
      <InputText search />
      <PostsList posts={''} />
    </PostsStyled>
  )
}
