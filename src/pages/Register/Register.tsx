import AuthenticationForm from "../../components/Registration/AuthenticationForm";
import { Card, CardBody } from "@nextui-org/react";
import AuthenticationImage from "../../components/AuthenticationImage";
import SignUpForm, {
  IRegistrationForm,
} from "../../components/Registration/SignUpForm";
import { useState } from "react";
import WhoamiForm, {
  IWhoamiForm,
} from "../../components/Registration/WhoamiForm";

export default function Register() {
  const [registrationStep, setRegistrationStep] = useState<
    "REGISTRATION" | "WHOAMI"
  >("REGISTRATION");
  const [registrationForm, setRegistrationForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    bio: "",
    twitter: "",
    github: "",
    discord: "",
  });

  const onRegistrationSubmit = (values: IRegistrationForm) => {
    setRegistrationForm({ ...registrationForm, ...values });
    setRegistrationStep("WHOAMI");
  };

  const onWhoamiSubmit = (values: IWhoamiForm) => {
    setRegistrationForm({ ...registrationForm, ...values });
    // FEEDBACK
  };

  return (
    <AuthenticationForm title={"> Let’s be friends"}>
      <>
        <Card className="w-full bg-[#1D1932] flex-1 max-w-[500px] ">
          <CardBody className="flex gap-10 min-w-[350px]">
            {registrationStep === "WHOAMI" && (
              <WhoamiForm onSubmit={onWhoamiSubmit} />
            )}
            {registrationStep === "REGISTRATION" && (
              <SignUpForm onSubmit={onRegistrationSubmit} />
            )}
          </CardBody>
        </Card>
        <AuthenticationImage />
      </>
    </AuthenticationForm>
  );
}
