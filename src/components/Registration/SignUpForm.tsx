import { useState } from "react";
import { Formik } from "formik";
import { initialRegistrationForm, validateRegistration } from "./util";
import DarkInput from "../DarkInput";
import { EyeSlashFilledIcon } from "../../assets/icons/EyeSlashed";
import { EyeFilledIcon } from "../../assets/icons/EyeFilled";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export interface IRegistrationForm {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface ISignUpFormProps {
  onSubmit: (form: IRegistrationForm) => void;
}

export default function SignUpForm({ onSubmit }: ISignUpFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <h1 className="text-4xl ">Sign in</h1>
      <div>
        <p>If you already have an account register</p>
        <p>
          You can{" "}
          <span>
            {" "}
            <Link className="text-primary" to="/login">
              Login here!
            </Link>
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-stretch gap-8">
        <Formik
          initialValues={initialRegistrationForm}
          validate={validateRegistration}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false);
          }}
        >
          {({
            isSubmitting,
            errors,
            touched,
            handleChange,
            handleBlur,
            values,
            handleSubmit,
          }) => (
            <form
              className="flex flex-col items-center justify-stretch gap-6 w-full"
              onSubmit={handleSubmit}
            >
              <DarkInput
                type="email"
                label="Email"
                variant="bordered"
                placeholder="Enter your email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                errorMessage={errors.email && touched.email && errors.email}
                startContent={<FontAwesomeIcon icon={faEnvelope} />}
              />
              <DarkInput
                type="text"
                label="Username"
                variant="bordered"
                placeholder="Enter your username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                errorMessage={
                  errors.username && touched.username && errors.username
                }
                startContent={<FontAwesomeIcon icon={faUser} />}
              />
              <DarkInput
                label="Password"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                errorMessage={
                  errors.password && touched.password && errors.password
                }
                startContent={<FontAwesomeIcon icon={faLock} />}
              />
              <DarkInput
                label="Confirm password"
                variant="bordered"
                placeholder="Confirm your password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={() => setShowConfirmPassword(!showPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                errorMessage={
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword
                }
                startContent={<FontAwesomeIcon icon={faLock} />}
              />
              <Button
                color="primary"
                className="w-full"
                type="submit"
                disabled={isSubmitting}
              >
                Register
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}
