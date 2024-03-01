import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query getUsersList(
    $pageSize: Int!
    $pageNumber: Int
    $sortBy: String!
    $sortDirection: SortDirection
    $searchTerm: String!
    $statusFilter: UserBlockStatus
  ) {
    getUsers(
      pageSize: $pageSize
      pageNumber: $pageNumber
      sortBy: $sortBy
      sortDirection: $sortDirection
      searchTerm: $searchTerm
      statusFilter: $statusFilter
    ) {
      users {
        createdAt
        userName
        userBan {
          createdAt
          reason
        }
        id
      }
      pagination {
        pagesCount
      }
    }
  }
`
