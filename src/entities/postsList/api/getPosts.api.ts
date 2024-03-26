import { gql } from '@apollo/client'
export const GET_POSTS = gql`
  query getPosts(
    $pageSize: Int
    $searchTerm: String
    $sortBy: String
    $sortDirection: SortDirection
    $endCursorPostId: Int
  ) {
    getPosts(
      searchTerm: $searchTerm
      pageSize: $pageSize
      sortBy: $sortBy
      sortDirection: $sortDirection
      endCursorPostId: $endCursorPostId
    ) {
      pagesCount
      pageSize
      totalCount
      items {
        images {
          url
          width
          height
        }
        ownerId
        description
        createdAt
        id
        postOwner {
          id
          firstName
          lastName
          userName
          avatars {
            url
            height
            width
            fileSize
          }
        }
      }
    }
  }
`
