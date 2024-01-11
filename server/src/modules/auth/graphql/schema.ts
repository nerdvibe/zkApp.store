export const schema = `
  scalar File

  input Signup {
    email: String!, 
    password: String!
    username: String!
    xUsername: String
    discordUrl: String
    githubUsername: String
    isDeveloper: Boolean!
    profilePicture: File
  }

  type Token {
    accessToken: String!
    refreshToken: String!
  }
  type Message {
    message: String!
    error: Boolean
  }

  type Mutation {
    signup(user: Signup!): Token  @rateLimit(limit: 5, duration: 60)
    login(email: String!, password: String!): Token  @rateLimit(limit: 7, duration: 60)
    resendVerifyEmail(email: String!): Message @rateLimit(limit: 3, duration: 60)
    verifyEmail(emailVerificationToken: String!): Message @rateLimit(limit: 10, duration: 60)
    requestResetPassword(email: String!): Message @rateLimit(limit: 5, duration: 60)
    updateResetPassword(resetToken: String!, newPassword: String!): Message @rateLimit(limit: 7, duration: 60)
    updatePassword(oldPassword: String!, newPassword: String!): Message @rateLimit(limit: 7, duration: 60)
    refreshToken(refreshToken: String!): Token @rateLimit(limit: 7, duration: 10)
    logout: Message
  }
`;
