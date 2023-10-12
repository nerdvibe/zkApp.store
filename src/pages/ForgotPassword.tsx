import { Button, Card, CardBody } from "@nextui-org/react";
import AuthenticationImage from "../components/AuthenticationImage";
import AuthenticationForm from "../components/Registration/AuthenticationForm";
import DarkInput from "../components/DarkInput";

export default function ForgotPassword() {
  return (
    <AuthenticationForm title={"> Forgot password"}>
      <>
        <Card className="w-full bg-[#1D1932] flex-1 max-w-[500px] ">
          <CardBody className="flex gap-10 min-w-[350px]">
            <h1 className="text-4xl ">Recover your account</h1>
            <div>
              <p className="">If you don’t remember your password</p>
            </div>
            <div className="flex flex-col items-center justify-stretch gap-8">
              <DarkInput
                isReadOnly
                type="email"
                label="Email"
                variant="bordered"
                defaultValue="junior@nextui.org"
                className=""
              />
              <Button color="primary" className="w-full">
                Recover account
              </Button>
            </div>
          </CardBody>
        </Card>
        <AuthenticationImage />
      </>
    </AuthenticationForm>
  );
}
