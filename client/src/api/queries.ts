import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

export const REFRESH = gql`
  mutation refreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      accessToken
      refreshToken
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout {
      message
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation requestResetPassword($email: String!) {
    requestResetPassword(email: $email) {
      message
    }
  }
`;

export const UPDATE_RESET_PASSWORD = gql`
  mutation updateResetPassword($resetToken: String!, $newPassword: String!) {
    updateResetPassword(resetToken: $resetToken, newPassword: $newPassword) {
      message
    }
  }
`;
