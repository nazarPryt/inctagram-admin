import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../shared/lib/ApolloClient/Schema.types'
const defaultOptions = {} as const

export type GetListPaymentsQueryVariables = Types.Exact<{
  pageNumber: Types.Scalars['Int']['input']
  pageSize: Types.Scalars['Int']['input']
  searchTerm: Types.Scalars['String']['input']
  sortBy: Types.Scalars['String']['input']
  sortDirection: Types.Scalars['String']['input']
}>

export type GetListPaymentsQuery = {
  __typename?: 'Query'
  getListPayments: {
    __typename?: 'PaymentsPaginationModel'
    pagination: { __typename?: '_PaginationModel'; totalCount: number }
    payments: Array<{ __typename?: 'Payment'; userId: number }>
  }
}

export const GetListPaymentsDocument = gql`
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

/**
 * __useGetListPaymentsQuery__
 *
 * To run a query within a React component, call `useGetListPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListPaymentsQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *      pageNumber: // value for 'pageNumber'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useGetListPaymentsQuery(
  baseOptions: Apollo.QueryHookOptions<GetListPaymentsQuery, GetListPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetListPaymentsQuery, GetListPaymentsQueryVariables>(
    GetListPaymentsDocument,
    options
  )
}
export function useGetListPaymentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetListPaymentsQuery, GetListPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetListPaymentsQuery, GetListPaymentsQueryVariables>(
    GetListPaymentsDocument,
    options
  )
}
export function useGetListPaymentsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetListPaymentsQuery, GetListPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetListPaymentsQuery, GetListPaymentsQueryVariables>(
    GetListPaymentsDocument,
    options
  )
}
export type GetListPaymentsQueryHookResult = ReturnType<typeof useGetListPaymentsQuery>
export type GetListPaymentsLazyQueryHookResult = ReturnType<typeof useGetListPaymentsLazyQuery>
export type GetListPaymentsSuspenseQueryHookResult = ReturnType<
  typeof useGetListPaymentsSuspenseQuery
>
export type GetListPaymentsQueryResult = Apollo.QueryResult<
  GetListPaymentsQuery,
  GetListPaymentsQueryVariables
>
