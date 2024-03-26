import { useCallback, useMemo } from 'react'

import { useGetPostsQuery } from '@/entities/postsList/api/getPosts.api.types'

export const useGetAllPosts = () => {
  const { data, fetchMore, loading } = useGetPostsQuery({
    variables: {
      endCursorPostId: 0,
      pageSize: 10,
    },
  })

  const posts = useMemo(() => (data ? data.getPosts.items ?? [] : []), [data])
  const totalCount = useMemo(() => (data ? data.getPosts.totalCount ?? 1 : 1), [data])
  const isHavePosts = data?.getPosts.items ? data.getPosts.items.length > 0 : false
  const hasMore = totalCount > posts.length

  const endCursorPostId = data?.getPosts.items.slice(-1)[0]?.id

  const fetchMoreData = useCallback(() => {
    if (posts.length === totalCount) {
      return
    }

    fetchMore({
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult
        }
        const newPosts = fetchMoreResult.getPosts?.items ?? []

        return Object.assign(
          {},
          { ...previousResult },
          {
            getPosts: {
              ...previousResult.getPosts,
              items: [...previousResult.getPosts.items!, ...newPosts],
            },
          }
        )
      },
      variables: {
        endCursorPostId,
      },
    })
  }, [endCursorPostId])

  return { fetchMoreData, hasMore, isHavePosts, loading, posts }
}
