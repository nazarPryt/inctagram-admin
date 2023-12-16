import { gql } from '@apollo/client'

export const GET_PAYMENTS = gql`
  query getListPayments(
    $pageSize: Int!
    $pageNumber: Int!
    $sortBy: String!
    $sortDirection: String!
    $searchTerm: String!
  ) {
    getListPayments(
      pageSize: $pageSize
      pageNumber: $pageNumber
      sortBy: $sortBy
      sortDirection: $sortDirection
      searchTerm: $searchTerm
    ) {
      pagination {
        totalCount
      }
      payments {
        userId
      }
    }
  }
`
