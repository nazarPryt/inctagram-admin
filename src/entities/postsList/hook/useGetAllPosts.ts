import { useCallback, useState } from 'react'

import { useGetPostsQuery } from '@/entities/postsList/api/getPosts.api.types'

export const useGetAllPosts = () => {
  const [endCursorPostId, setEndCursorPostId] = useState<number>(0)
  const [pageSize, setPageSize] = useState(10)

  const { data, fetchMore, loading, previousData } = useGetPostsQuery({
    variables: {
      endCursorPostId,
      pageSize,
    },
  })

  const isHavePosts = data?.getPosts.items ? data.getPosts.items.length > 0 : false
  const posts = data?.getPosts.items || []
  const totalCount = data?.getPosts.totalCount || 0
  const hasMore = totalCount > posts.length

  const fetchMoreData = useCallback(() => {
    if (data?.getPosts.items.length === data?.getPosts.totalCount) {
      return
    }

    fetchMore({
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev
        }

        setPageSize(prev => prev + 10)

        return Object.assign({}, prev, {
          posts: {
            data: [...(prev.getPosts.items ?? []), ...(fetchMoreResult.getPosts.items ?? [])],
          },
        })
      },
      variables: {
        endCursorPostId,
        pageSize: pageSize,
      },
    })
  }, [fetchMore, data?.getPosts.items])

  return { data, fetchMoreData, hasMore, isHavePosts, loading }
}
