import { Button, Card, CardBody, Checkbox } from "@nextui-org/react";
import { useState } from "react";
import { EyeFilledIcon } from "../assets/icons/EyeFilled";
import { EyeSlashFilledIcon } from "../assets/icons/EyeSlashed";
import DarkInput from "../components/DarkInput";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationForm from "../components/Registration/AuthenticationForm";
import AuthenticationImage from "../components/AuthenticationImage";
import { useDispatch } from "react-redux";
import { login } from "../store/session";
import routes from "../routes";
import SocialButtons from "../components/SocialButtons";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible(!isVisible);
  const loginHandler = () => {
    dispatch(
      login({
        user: {
          username: "Test user",
          email: "test@gmail.com",
          avatar: "https://i.pravatar.cc/300",
        },
        token: "1234",
      })
    );
    navigate(routes.LANDING);
  };

  return (
    <AuthenticationForm title={"> Login"}>
      <>
        <Card className="w-full bg-[#1D1932] flex-1 max-w-[500px] ">
          <CardBody className="flex gap-10 min-w-[350px]">
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
                isReadOnly
                type="email"
                label="Email"
                variant="bordered"
                defaultValue="junior@nextui.org"
                className=""
              />
              <DarkInput
                label="Password"
                variant="bordered"
                placeholder="Enter your password"
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
