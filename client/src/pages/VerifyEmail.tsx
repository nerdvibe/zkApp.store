import { Link, useParams } from "react-router-dom";
import { useVerifyEmailMutation } from "../gql/generated";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Card, CardBody } from "@nextui-org/react";
import { Player } from "@lottiefiles/react-lottie-player";
import paperPlane from "@/assets/animations/paper-plane.json";
import emailConfirmed from "@/assets/animations/email-confirmed.json";
import warning from "@/assets/animations/warning.json";
import routes from "../routes";

export default function VerifyEmail() {
  const [loader, setLoader] = useState(true);
  const [showError, setShowError] = useState(false);
  const { verifyEmailToken } = useParams();
  const [verifyEmail, { called, loading, error, data }] =
    useVerifyEmailMutation();

  useEffect(() => {
    if (verifyEmailToken && !called) {
      verifyEmail({
        variables: {
          emailVerificationToken: verifyEmailToken,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (data) {
      const loadingToast = toast.loading("Verifying email");
      if (data.verifyEmail?.message === "Token not valid") {
        setShowError(true);
        setTimeout(() => {
          toast.dismiss(loadingToast);
          toast.error(
            <b>Cannot verify you email, please check the link and retry.</b>
          );
        }, 1000);
      } else {
        setTimeout(() => {
          toast.dismiss(loadingToast);
          toast.success(<b>Email verified!</b>);
        }, 1000);
      }
      setTimeout(() => {
        toast.dismiss(loadingToast);
        setLoader(false);
      }, 1000);
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-4 my-11 md:mx-8">
      <h1 className="text-4xl text-white font-bold">
        {"> Email verification"}
      </h1>
      <div className="flex justify-center items-center h-full min-h-[500px]">
        <Card>
          <CardBody className="text-center gap-4 max-w-[400px] flex justify-center">
            {loader || loading ? (
              <div className="flex items-center flex-col gap-5 p-4">
                <Player
                  src={paperPlane}
                  loop
                  style={{ width: "100%", maxWidth: "200px" }}
                  autoplay
                />
                <div>
                  <h1 className="text-4xl text-white font-bold">Processing</h1>
                  <p className="text-xl text-white ">
                    Your email is being verified
                  </p>
                </div>
              </div>
            ) : showError || error ? (
              <div className="flex items-center flex-col gap-5 p-4 pt-0">
                <Player
                  src={warning}
                  style={{ width: "100%", maxWidth: "200px" }}
                  autoplay
                  keepLastFrame
                />
                <div className="mt-4 gap-2">
                  <h1 className="text-4xl text-white font-bold">Oh no!</h1>
                  <p className="text-lg text-white ">
                    There was an error verifying your email.
                  </p>
                  <p className="text-lg text-white ">Please try again later.</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center flex-col gap-5 p-4 pt-0">
                <Player
                  src={emailConfirmed}
                  loop
                  style={{ width: "100%", maxWidth: "200px" }}
                  autoplay
                />
                <div className="mt-4 gap-2">
                  <h1 className="text-4xl text-white font-bold">Hooray! 🎉</h1>
                  <p className="text-lg text-white ">
                    Your email has been verified
                  </p>
                  <p className="text-lg text-white ">
                    <Link className="text-primary" to={routes.DASHBOARD}>
                      Click here
                    </Link>{" "}
                    to go to the homepage
                  </p>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
