import { gql } from '@apollo/client'

export const GET_PROFILE_INFO = gql`
  query getProfileInfo($userID: Int! = 10) {
    getUser(userId: $userID) {
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
