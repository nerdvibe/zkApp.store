import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import routes from "../routes";
import AuthenticationForm from "../components/Registration/AuthenticationForm";
import { Button, Card, CardBody, Spinner } from "@nextui-org/react";
import DarkInput from "../components/DarkInput";
import { Formik } from "formik";
import { EyeSlashFilledIcon } from "../assets/icons/EyeSlashed";
import { EyeFilledIcon } from "../assets/icons/EyeFilled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import AuthenticationImage from "../components/AuthenticationImage";
import { toast } from "react-hot-toast";
import { useUpdateResetPasswordMutation } from "../gql/generated";

const initialResetAccount = {
  password: "",
  confirmPassword: "",
};

interface IForm {
  password: string;
  confirmPassword: string;
}

const validateResetAccount = (values: IForm) => {
  const errors = {};
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

export default function ResetAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [updatePassword, { loading, data }] = useUpdateResetPasswordMutation();
  const { resetToken } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Check if token is valid
    if (!resetToken) {
      navigate(routes.HOME);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        navigate(routes.LOGIN);
      }, 500);
    }
  }, [data]);

  const onSubmit = ({ password }: IForm) => {
    toast.promise(
      updatePassword({
        variables: {
          resetToken,
          newPassword: password,
        },
      }),
      {
        loading: "Updating password...",
        success: <b>Password updated!</b>,
        error: <b>Could not reset your password.</b>,
      }
    );
  };

  return (
    <AuthenticationForm title={"> Recover account"}>
      <Card className="w-full auth-card flex-1 max-w-[500px] min-w-[350px]">
        <CardBody className="flex gap-10">
          <h1 className="text-4xl ">Reset password</h1>
          <div className="flex flex-col items-center justify-stretch gap-8">
            <Formik
              initialValues={initialResetAccount}
              validate={validateResetAccount}
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
                isValid,
                dirty,
              }) => (
                <form
                  className="flex flex-col items-center justify-stretch gap-6 w-full"
                  onSubmit={handleSubmit}
                >
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
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
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
                    isDisabled={!dirty || !isValid || isSubmitting}
                  >
                    {loading ? <Spinner size="sm" color="white" /> : "Confirm"}
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </CardBody>
      </Card>
      <AuthenticationImage />
    </AuthenticationForm>
  );
}
