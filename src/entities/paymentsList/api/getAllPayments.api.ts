import { gql } from '@apollo/client'
export const GET_ALL_PAYMENTS = gql`
  query getAllPayments(
    $pageSize: Int
    $pageNumber: Int
    $sortBy: String
    $sortDirection: SortDirection
  ) {
    getAllPayments(
      pageSize: $pageSize
      sortBy: $sortBy
      sortDirection: $sortDirection
      pageNumber: $pageNumber
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
