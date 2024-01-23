import { gql } from '@apollo/client'

export const GET_PAYMENTS = gql`
  query getUserPayments(
    $userID: Int!
    $pagesize: Int!
    $pageNumber: Int!
    $sortBy: String!
    $sortDirection: SortDirection
  ) {
    getListPaymentsById(
      userId: $userID
      pageSize: $pagesize
      pageNumber: $pageNumber
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      items {
        paymentType
        price
        dateOfPayment
        endDate
        status
        type
        startDate
        payments {
          userId
          id
          currency
          amount
        }
        id
      }
    }
  }
`
