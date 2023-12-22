import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query getUsersList(
    $pageSize: Int!
    $pageNumber: Int
    $sortBy: String!
    $sortDirection: SortDirection
    $searchTerm: String!
    $blockStatus: BlockStatus
  ) {
    getUsers(
      pageSize: $pageSize
      pageNumber: $pageNumber
      sortBy: $sortBy
      sortDirection: $sortDirection
      searchTerm: $searchTerm
      blockStatus: $blockStatus
    ) {
      users {
        userName
        id
      }
      pagination {
        pagesCount
      }
    }
  }
`
