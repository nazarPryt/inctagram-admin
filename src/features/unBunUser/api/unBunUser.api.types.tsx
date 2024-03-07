import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../shared/lib/ApolloClient/Schema.types'
const defaultOptions = {} as const

export type UnbanUserMutationVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input']
}>

export type UnbanUserMutation = { __typename?: 'Mutation'; unbanUser: boolean }

export const UnbanUserDocument = gql`
  mutation unbanUser($userId: Int!) {
    unbanUser(userId: $userId)
  }
`
export type UnbanUserMutationFn = Apollo.MutationFunction<
  UnbanUserMutation,
  UnbanUserMutationVariables
>

/**
 * __useUnbanUserMutation__
 *
 * To run a mutation, you first call `useUnbanUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnbanUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unbanUserMutation, { data, loading, error }] = useUnbanUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUnbanUserMutation(
  baseOptions?: Apollo.MutationHookOptions<UnbanUserMutation, UnbanUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<UnbanUserMutation, UnbanUserMutationVariables>(
    UnbanUserDocument,
    options
  )
}
export type UnbanUserMutationHookResult = ReturnType<typeof useUnbanUserMutation>
export type UnbanUserMutationResult = Apollo.MutationResult<UnbanUserMutation>
export type UnbanUserMutationOptions = Apollo.BaseMutationOptions<
  UnbanUserMutation,
  UnbanUserMutationVariables
>
