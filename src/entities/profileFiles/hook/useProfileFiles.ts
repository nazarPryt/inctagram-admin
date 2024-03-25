import { useCallback, useMemo, useState } from 'react'

import { useGetPostsByUserQuery } from '../api/getPostsByUser.api.types'

type PropsType = {
  userId: number
}
export const useProfileFiles = ({ userId }: PropsType) => {
  const [endCursorId, setEndCursorId] = useState<null | number | undefined>(0)

  const { data, fetchMore, loading } = useGetPostsByUserQuery({
    variables: {
      endCursorId,
      userId,
    },
  })

  const posts = useMemo(() => (data ? data.getPostsByUser.items ?? [] : []), [data])
  const totalCount = useMemo(() => (data ? data.getPostsByUser.totalCount ?? 1 : 1), [data])
  const isHavePosts = data?.getPostsByUser.items ? data.getPostsByUser.items.length > 0 : false
  const hasMore = totalCount > posts?.length

  const fetchMoreData = useCallback(() => {
    if (posts.length === totalCount) {
      return
    }
    const lastPostId = posts.length ? posts[posts.length - 1].id : undefined

    fetchMore({
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult
        }
        setEndCursorId(lastPostId)

        return Object.assign({}, previousResult, {
          posts: {
            data: [
              ...(previousResult.getPostsByUser.items ?? []),
              ...(fetchMoreResult.getPostsByUser.items ?? []),
            ],
          },
        })
      },
      variables: {
        endCursorId,
      },
    })
  }, [endCursorId])

  return { fetchMoreData, hasMore, isHavePosts, loading, posts }
}
