import { gql } from '@apollo/client'

export const GET_PAYMENTS = gql`
  query getListPayments(
    $userID: Int!
    $pagesize: Int!
    $pageNumber: Int!
    $sortBy: String!
    $sortDirection: SortDirection
  ) {
    getListPayments(
      userId: $userID
      pageSize: $pagesize
      pageNumber: $pageNumber
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      items {
        paymentType
        id
      }
    }
  }
`
