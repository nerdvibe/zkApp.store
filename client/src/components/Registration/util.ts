export const initialRegistrationForm = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  isDeveloper: false,
};

export const initialWhoamiForm = {
  bio: "",
  discordUrl: "",
  githubUsername: "",
  xUsername: "",
  file: undefined,
};

export const validateRegistration = (values: any) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.username) {
    errors.username = "Required";
  }
  if (!USERNAME_REGEX.test(values.username)) {
    errors.username = "Username must be 4 characters long.";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!PASSWORD_REGEX.test(values.password)) {
    errors.password =
      "The password must be at least 6 characters long and must contain upper and lower case letters, numbers and special characters.";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords must match";
  }
  return errors;
};

export const USERNAME_REGEX = /^[a-zA-Z0-9_.-]{4,}$/i;
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/i;
