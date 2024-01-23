import { Button, Card, CardBody, Spinner } from "@nextui-org/react";
import AuthenticationImage from "../components/AuthenticationImage";
import AuthenticationForm from "../components/Registration/AuthenticationForm";
import DarkInput from "../components/DarkInput";
import { ChangeEvent, useState } from "react";
import { EMAIL_REGEX } from "../components/Registration/util";
import { useMutation } from "@apollo/client";
import { RESET_PASSWORD } from "../api/queries";
import { toast } from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [sendEmailReset, { data, loading }] = useMutation(RESET_PASSWORD);

  const onClick = () => {
    // requestResetPassword()
    toast.promise(sendEmailReset({ variables: { email } }), {
      loading: "Sending email...",
      success: <b>Email sent!</b>,
      error: <b>Could not find your account.</b>,
    });
  };

  const isValidEmail = EMAIL_REGEX.test(email);

  return (
    <AuthenticationForm title={"> Forgot password"}>
      <Card className="w-full auth-card flex-1 max-w-[500px] min-w-[350px]">
        <CardBody className="flex gap-10">
          <h1 className="text-4xl ">Recover your account</h1>
          <div>
            <p className="">If you don’t remember your password</p>
          </div>
          <div className="flex flex-col items-center justify-stretch gap-8">
            <DarkInput
              type="email"
              label="Email"
              variant="bordered"
              className=""
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
            />
            <Button
              color="primary"
              className="w-full"
              onClick={onClick}
              isDisabled={!isValidEmail}
            >
              {loading ? (
                <Spinner size="sm" color="white" />
              ) : (
                "Recover account"
              )}
            </Button>
          </div>
          <div className="py-4 flex justify-center">
            {data && <p>We've sent an email to recover your account</p>}
          </div>
        </CardBody>
      </Card>
      <AuthenticationImage noText />
    </AuthenticationForm>
  );
}
