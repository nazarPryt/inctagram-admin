import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../../shared/lib/ApolloClient/Schema.types'
const defaultOptions = {} as const

export type GetUserPaymentsQueryVariables = Types.Exact<{
  pageNumber: Types.Scalars['Int']['input']
  pagesize: Types.Scalars['Int']['input']
  sortBy: Types.Scalars['String']['input']
  sortDirection?: Types.InputMaybe<Types.SortDirection>
  userID: Types.Scalars['Int']['input']
}>

export type GetUserPaymentsQuery = {
  __typename?: 'Query'
  getListPaymentsById: {
    __typename?: 'PaymentPaginationModel'
    items: Array<{
      __typename?: 'Subscription'
      dateOfPayment?: any | null
      endDate?: any | null
      id: string
      paymentType?: Types.PaymentMethod | null
      payments: Array<{
        __typename?: 'Payment'
        amount: number
        currency: Types.CurrencyType
        id: number
        userId: number
      }>
      price: number
      startDate?: any | null
      status: Types.StatusSubscriptionType
      type: Types.SubscriptionType
    }>
  }
}

export const GetUserPaymentsDocument = gql`
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

/**
 * __useGetUserPaymentsQuery__
 *
 * To run a query within a React component, call `useGetUserPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPaymentsQuery({
 *   variables: {
 *      userID: // value for 'userID'
 *      pagesize: // value for 'pagesize'
 *      pageNumber: // value for 'pageNumber'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetUserPaymentsQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserPaymentsQuery, GetUserPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetUserPaymentsQuery, GetUserPaymentsQueryVariables>(
    GetUserPaymentsDocument,
    options
  )
}
export function useGetUserPaymentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserPaymentsQuery, GetUserPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetUserPaymentsQuery, GetUserPaymentsQueryVariables>(
    GetUserPaymentsDocument,
    options
  )
}
export function useGetUserPaymentsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserPaymentsQuery, GetUserPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetUserPaymentsQuery, GetUserPaymentsQueryVariables>(
    GetUserPaymentsDocument,
    options
  )
}
export type GetUserPaymentsQueryHookResult = ReturnType<typeof useGetUserPaymentsQuery>
export type GetUserPaymentsLazyQueryHookResult = ReturnType<typeof useGetUserPaymentsLazyQuery>
export type GetUserPaymentsSuspenseQueryHookResult = ReturnType<
  typeof useGetUserPaymentsSuspenseQuery
>
export type GetUserPaymentsQueryResult = Apollo.QueryResult<
  GetUserPaymentsQuery,
  GetUserPaymentsQueryVariables
>
