import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query getUsers(
    $sortBy: String!
    $searchTerm: String!
    $sortDirection: String!
    $pageNumber: Int!
  ) {
    getUsers(
      pageNumber: $pageNumber
      sortBy: $sortBy
      searchTerm: $searchTerm
      sortDirection: $sortDirection
    ) {
      items {
        email
      }
      page
      pagesCount
      pageSize
      totalCount
    }
  }
`
