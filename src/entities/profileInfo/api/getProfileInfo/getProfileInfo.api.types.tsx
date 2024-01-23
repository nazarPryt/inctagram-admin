import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../../shared/lib/ApolloClient/Schema.types'
const defaultOptions = {} as const

export type GetProfileInfoQueryVariables = Types.Exact<{
  userID: Types.Scalars['Int']['input']
}>

export type GetProfileInfoQuery = {
  __typename?: 'Query'
  getProfileInfo: {
    __typename?: 'ProfileInfoModel'
    profile: {
      __typename?: 'Profile'
      avatars?: Array<{ __typename?: 'Avatar'; height: number; url: string; width: number }> | null
      createdAt: any
      firstName?: null | string
      id: number
      lastName?: null | string
      userName?: null | string
    }
  }
}

export const GetProfileInfoDocument = gql`
  query getProfileInfo($userID: Int!) {
    getProfileInfo(userId: $userID) {
      profile {
        createdAt
        id
        lastName
        firstName
        userName
        avatars {
          url
          height
          width
        }
      }
    }
  }
`

/**
 * __useGetProfileInfoQuery__
 *
 * To run a query within a React component, call `useGetProfileInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileInfoQuery({
 *   variables: {
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useGetProfileInfoQuery(
  baseOptions: Apollo.QueryHookOptions<GetProfileInfoQuery, GetProfileInfoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetProfileInfoQuery, GetProfileInfoQueryVariables>(
    GetProfileInfoDocument,
    options
  )
}
export function useGetProfileInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProfileInfoQuery, GetProfileInfoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetProfileInfoQuery, GetProfileInfoQueryVariables>(
    GetProfileInfoDocument,
    options
  )
}
export function useGetProfileInfoSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileInfoQuery, GetProfileInfoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetProfileInfoQuery, GetProfileInfoQueryVariables>(
    GetProfileInfoDocument,
    options
  )
}
export type GetProfileInfoQueryHookResult = ReturnType<typeof useGetProfileInfoQuery>
export type GetProfileInfoLazyQueryHookResult = ReturnType<typeof useGetProfileInfoLazyQuery>
export type GetProfileInfoSuspenseQueryHookResult = ReturnType<
  typeof useGetProfileInfoSuspenseQuery
>
export type GetProfileInfoQueryResult = Apollo.QueryResult<
  GetProfileInfoQuery,
  GetProfileInfoQueryVariables
>
