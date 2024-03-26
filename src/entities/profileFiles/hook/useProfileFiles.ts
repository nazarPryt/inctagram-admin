import { useCallback, useMemo } from 'react'

import { useGetPostsByUserQuery } from '../api/getPostsByUser.api.types'

type PropsType = {
  userId: number
}

//https://dev.to/moruno21/graphql-infinite-scroll-4oan

export const useProfileFiles = ({ userId }: PropsType) => {
  const { data, fetchMore, loading } = useGetPostsByUserQuery({
    variables: {
      endCursorId: 0,
      userId,
    },
  })
  const posts = useMemo(() => (data ? data.getPostsByUser.items ?? [] : []), [data])
  const totalCount = useMemo(() => (data ? data.getPostsByUser.totalCount ?? 1 : 1), [data])
  const isHavePosts = data?.getPostsByUser.items ? data.getPostsByUser.items.length > 0 : false
  const hasMore = totalCount > posts?.length

  const endCursorId = data?.getPostsByUser?.items?.slice(-1)[0]?.id

  const fetchMoreData = useCallback(() => {
    if (posts.length === totalCount) {
      return
    }

    fetchMore({
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult
        }
        const newPosts = fetchMoreResult.getPostsByUser?.items ?? []

        return Object.assign(
          {},
          { ...previousResult },
          {
            getPostsByUser: {
              ...previousResult.getPostsByUser,
              items: [...previousResult.getPostsByUser.items!, ...newPosts],
            },
          }
        )
      },
      variables: {
        endCursorId,
      },
    })
  }, [endCursorId])

  return { fetchMoreData, hasMore, isHavePosts, loading, posts }
}
