import { gql } from '@apollo/client'
export const GET_PAYMENTS = gql`
  query getAllPayments(
    $pageSize: Int
    $pageNumber: Int
    $sortBy: String
    $sortDirection: SortDirection
    $searchTerm: String
  ) {
    getPayments(
      pageSize: $pageSize
      sortBy: $sortBy
      sortDirection: $sortDirection
      pageNumber: $pageNumber
      searchTerm: $searchTerm
    ) {
      pagesCount
      pageSize
      totalCount
      items {
        id
        paymentMethod
        userName
        type
        amount
        createdAt
        currency
        avatars {
          url
          height
          width
        }
      }
    }
  }
`
