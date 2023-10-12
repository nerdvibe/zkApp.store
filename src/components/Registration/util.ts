export const initialRegistrationForm = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

export const initialWhoamiForm = {
  bio: "",
  twitter: "",
  github: "",
  discord: "",
  file: null
};

export const validateRegistration = (values: any) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords must match";
  }
  return errors;
};
