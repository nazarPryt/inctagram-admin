import { gql } from '@apollo/client'

export const UN_BAN_USER = gql`
  mutation unbanUser($userId: Int!) {
    unbanUser(userId: $userId)
  }
`
