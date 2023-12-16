import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../shared/lib/ApolloClient/Schema.types'
const defaultOptions = {} as const

export type GetUsersQueryVariables = Types.Exact<{
  pageNumber: Types.Scalars['Int']['input']
  searchTerm: Types.Scalars['String']['input']
  sortBy: Types.Scalars['String']['input']
  sortDirection: Types.Scalars['String']['input']
}>

export type GetUsersQuery = {
  __typename?: 'Query'
  getUsers: {
    __typename?: 'PaginationModel'
    items: Array<{ __typename?: 'User'; email: string }>
    page: number
    pageSize: number
    pagesCount: number
    totalCount: number
  }
}

export const GetUsersDocument = gql`
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

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      sortBy: // value for 'sortBy'
 *      searchTerm: // value for 'searchTerm'
 *      sortDirection: // value for 'sortDirection'
 *      pageNumber: // value for 'pageNumber'
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options)
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options)
}
export function useGetUsersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options)
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>
