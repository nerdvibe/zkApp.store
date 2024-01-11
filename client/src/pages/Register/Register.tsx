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
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
import { useDispatch } from "react-redux";
import { showEmailVerification } from "../../store/registration";
import { login } from "../../store/session";

export default function Register() {
  const [signup] = useSignupMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    try {
      const { discordUrl, githubUsername, xUsername, file } = values;
      setRegistrationForm({ ...registrationForm, ...values });
      const { email, password, isDeveloper, username } = registrationForm;
      const result = await signup({
        variables: {
          email,
          password,
          isDeveloper,
          username,
          discordUrl: discordUrl || undefined,
          githubUsername: githubUsername || undefined,
          xUsername: xUsername || undefined,
          file,
        },
      });
      if (result.data) {
        dispatch(showEmailVerification());
        navigate(routes.PENDING_VERIFICATION);
        toast(`An email has been sent to ${email}!`, {
          icon: "📨",
        });
        setTimeout(() => {
          dispatch(
            login({
              authToken: result?.data?.signup?.accessToken,
              refreshToken: result?.data?.signup?.refreshToken,
            })
          );
        }, 500);
        return;
      }
    } catch (error) {
      toast.error(
        error.message || "There was an error, please again retry later."
      );
    }
  };

  const goBack = () => {
    setRegistrationStep("REGISTRATION");
  };

  return (
    <AuthenticationForm title={"> Let’s be friends"} minHeight={800}>
      <>
        <Card className="w-full auth-card flex-1 max-w-[500px]  min-w-[350px]">
          <CardBody className="flex gap-10">
            {registrationStep === "WHOAMI" && (
              <WhoamiForm onSubmit={onWhoamiSubmit} goBack={goBack} />
            )}
            {registrationStep === "REGISTRATION" && (
              <SignUpForm
                onSubmit={onRegistrationSubmit}
                initialState={registrationForm}
              />
            )}
          </CardBody>
        </Card>
        <AuthenticationImage />
      </>
    </AuthenticationForm>
  );
}
