import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation UserSignIn(
    $email: String
    $fullName: String
    $avatar: String
    $providerId: String
  ) {
    signIn(
      email: $email
      fullName: $fullName
      avatar: $avatar
      providerId: $providerId
    ) {
      ... on User {
        _id
        email
        firstName
        lastName
        providerId
        avatar
        createdAt
        lastLogin
        newUser
      }
      ... on Errors {
        type
        message
        errors {
          field
          message
        }
      }
    }
  }
`

export const DELETE_PROFILE = gql`
  mutation DeleteProfile($email: String) {
    deleteProfile(email: $email) {
      ... on User {
        _id
        email
        firstName
        lastName
        providerId
        avatar
        createdAt
        lastLogin
        newUser
      }
      ... on Errors {
        type
        message
        errors {
          field
          message
        }
      }
    }
  }
`