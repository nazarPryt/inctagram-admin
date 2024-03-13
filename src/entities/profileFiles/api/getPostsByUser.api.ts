import { gql } from '@apollo/client'
export const GET_POSTS_BY_USER = gql`
  query getPostsByUser($userId: Int!, $endCursorId: Int) {
    getPostsByUser(userId: $userId, endCursorId: $endCursorId) {
      totalCount
      pageSize
      pagesCount
      items {
        createdAt
        fileSize
        height
        id
        url
        width
      }
    }
  }
`
