import { useState } from 'react'

import { useGetPostsByUserQuery } from '../api/getPostsByUser.api.types'

type PropsType = {
  userId: number
}
export const useProfileFiles = ({ userId }: PropsType) => {
  const [endCursorId, setEndCursorId] = useState<null | number | undefined>(0)

  const { data, error, loading } = useGetPostsByUserQuery({
    variables: {
      endCursorId,
      userId,
    },
  })

  if (data && data.getPostsByUser.items) {
    const posts = data.getPostsByUser.items
    const isHavePosts = data && posts?.length
    const hasMore = data.getPostsByUser.totalCount > posts?.length

    const fetchMoreData = () => {
      const lastPostId = isHavePosts ? posts[posts.length - 1].id : null

      setEndCursorId(lastPostId)
    }

    return { data, fetchMoreData, hasMore, isHavePosts, loading }
  } else {
    return { data, fetchMoreData: () => {}, hasMore: false, isHavePosts: false, loading }
  }
}
