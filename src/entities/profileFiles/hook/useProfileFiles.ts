import { useCallback, useMemo, useState } from 'react'

import { useGetPostsByUserQuery } from '../api/getPostsByUser.api.types'

type PropsType = {
  userId: number
}
export const useProfileFiles = ({ userId }: PropsType) => {
  // const [endCursorId, setEndCursorId] = useState<null | number | undefined>(0)

  const { data, fetchMore, loading } = useGetPostsByUserQuery({
    variables: {
      endCursorId: 0,
      userId,
    },
  })
  const posts = data ? data.getPostsByUser.items ?? [] : []

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
        const newPosts = fetchMoreResult.getPostsByUser?.items
        const { pageSize, pagesCount, totalCount } = fetchMoreResult.getPostsByUser

        return newPosts?.length
          ? {
              getPostsByUser: {
                __typename: previousResult.getPostsByUser.__typename,
                items: [...previousResult.getPostsByUser.items!, ...newPosts],
                pageSize,
                pagesCount,
                totalCount,
              },
            }
          : previousResult
      },
      variables: {
        endCursorId,
      },
    })
  }, [endCursorId])

  const totalCount = data ? data.getPostsByUser.totalCount ?? 1 : 1
  const isHavePosts = true
  const hasMore = totalCount > posts?.length

  return { fetchMoreData, hasMore, isHavePosts, loading, posts }
}
