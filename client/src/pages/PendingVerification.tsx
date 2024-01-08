import { Card, CardBody } from "@nextui-org/react";
import Lottie from "react-lottie-player";
import emailSent from "@/assets/animations/email-sent.json";
import { useDispatch, useSelector } from "react-redux";
import { disableEmailVerification } from "../store/registration";
import { useEffect, useState } from "react";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import routes from "../routes";

export default function PendingVerification() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showEmailVerification } = useSelector((state: RootState) => {
    return state.registration;
  });

  const disablePage = () => {
    dispatch(disableEmailVerification());
  };

  useEffect(() => {
    if (!showEmailVerification) {
      navigate(routes.DASHBOARD);
    }
    return disablePage;
  }, []);

  return (
    <div className="flex flex-col gap-4 my-11 md:mx-8">
      <h1 className="text-4xl text-white font-bold">
        {"> Email verification"}
      </h1>
      <div className="flex justify-center items-center h-full min-h-[500px]">
        <Card>
          <CardBody className="text-center gap-4 max-w-[350px] flex justify-center">
            <div className="flex items-center flex-col gap-5 p-4 pt-0">
              <Lottie
                animationData={emailSent}
                loop={true}
                style={{ width: "100%", maxWidth: "200px" }}
                play={true}
                speed={0.5}
              />
              <div className="mt-4 gap-2">
                <h1 className="text-4xl text-white font-bold">
                  Pending verification
                </h1>
                <p className="text-lg text-white ">
                  A verification link has been sent to your email account.
                </p>
                <p className="text-sm text-gray-500 ">
                  In case you don't find it check spam folder.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
