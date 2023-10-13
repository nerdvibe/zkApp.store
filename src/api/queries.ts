import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation Signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      message
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

export const REFRESH = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      accessToken
      refreshToken
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout($refreshToken: String!) {
    signup(refreshToken: $refreshToken) {
      message
    }
  }
`;
