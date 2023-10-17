import { Button, Card, CardBody, Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { EyeFilledIcon } from "../assets/icons/EyeFilled";
import { EyeSlashFilledIcon } from "../assets/icons/EyeSlashed";
import DarkInput from "../components/DarkInput";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationForm from "../components/Registration/AuthenticationForm";
import AuthenticationImage from "../components/AuthenticationImage";
import { useDispatch } from "react-redux";
import routes from "../routes";
import SocialButtons from "../components/SocialButtons";
import { login } from "../store/session";
import { useLoginMutation, useUserDetailsLazyQuery } from "../gql/generated";
import { toast } from "react-hot-toast";
import { toggleLoader } from "@/store/config";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useLoginMutation();

  const toggleVisibility = () => setIsVisible(!isVisible);
  const loginHandler = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      if (result.data) {
        dispatch(
          login({
            authToken: result.data.login?.accessToken,
            refreshToken: result.data.login?.refreshToken,
          })
        );
        toast.success("Logged-in");
        dispatch(toggleLoader({ show: true }));
        setTimeout(() => {
          navigate(routes.LANDING);
          dispatch(toggleLoader({ show: false }));
        }, 500);
        return;
      }
    } catch (error) {
      toast.error(error.message || "Wrong email or password");
    }
  };

  return (
    <AuthenticationForm title={"> Login"} minHeight={800}>
      <>
        <Card className="w-full bg-[#1D1932] flex-1 max-w-[500px] min-w-[350px]">
          <CardBody className="flex gap-10">
            <h1 className="text-4xl ">Sign in</h1>
            <div>
              <p className="">If you don’t have an account register</p>
              <p className="">
                You can{" "}
                <span>
                  {" "}
                  <Link className="text-primary" to="/register">
                    Register here!
                  </Link>
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-stretch gap-8">
              <DarkInput
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                type="email"
                label="Email"
                variant="bordered"
              />
              <DarkInput
                label="Password"
                variant="bordered"
                onChange={(e) => setPassword(e.currentTarget.value)}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className=""
              />
              <div className="flex flex-row justify-between w-full">
                <Checkbox className="">Remember me</Checkbox>
                <span>
                  {" "}
                  <Link className="text-primary" to="/forgot">
                    Forgot password?
                  </Link>
                </span>
              </div>
              <Button color="primary" className="w-full" onClick={loginHandler}>
                Login
              </Button>
              <p className="opacity-70">or continue with</p>
              <SocialButtons />
            </div>
          </CardBody>
        </Card>
        <AuthenticationImage login />
      </>
    </AuthenticationForm>
  );
}
