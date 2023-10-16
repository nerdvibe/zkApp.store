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
import { useSignupMutation } from "../../gql/generated";

export default function Register() {
  const [signup] = useSignupMutation();
  const [registrationStep, setRegistrationStep] = useState<
    "REGISTRATION" | "WHOAMI"
  >("REGISTRATION");
  const [registrationForm, setRegistrationForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    isDeveloper: false,
    bio: "",
    discordUrl: "",
    githubUsername: "",
    xUsername: "",
  });

  const onRegistrationSubmit = (values: IRegistrationForm) => {
    setRegistrationForm({ ...registrationForm, ...values });
    setRegistrationStep("WHOAMI");
  };

  const onWhoamiSubmit = async (values: IWhoamiForm) => {
    setRegistrationForm({ ...registrationForm, ...values });
    const { email, password, isDeveloper, username } = registrationForm;
    const result = await signup({
      variables: {
        email,
        password,
        isDeveloper,
        username,
      },
    });
    console.log("🚀 ~ file: Register.tsx:46 ~ onWhoamiSubmit ~ result:", result)
    // FEEDBACK
  };

  return (
    <AuthenticationForm title={"> Let’s be friends"} minHeight={800}>
      <>
        <Card className="w-full bg-[#1D1932] flex-1 max-w-[500px]  min-w-[350px]">
          <CardBody className="flex gap-10">
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
