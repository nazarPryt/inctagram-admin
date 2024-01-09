import { gql } from '@apollo/client'

export const GET_PROFILE_INFO = gql`
  query getProfileInfo($userID: Int!) {
    getProfileInfo(userId: $userID) {
      profile {
        createdAt
        id
        lastName
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
