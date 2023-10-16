import { useParams } from "react-router-dom";
import { useVerifyEmailMutation } from "../gql/generated";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Card, CardBody, Image, Spinner } from "@nextui-org/react";
import emailVerified from "@/assets/email-verified.jpg";

export default function VerifyEmail() {
  const { verifyEmailToken } = useParams();
  const [verifyEmail, { called, loading }] = useVerifyEmailMutation();

  useEffect(() => {
    if (verifyEmailToken && !called) {
      toast.promise(
        verifyEmail({
          variables: {
            emailVerificationToken: verifyEmailToken,
          },
        }),
        {
          loading: "Verifying email",
          success: <b>Email verified!</b>,
          error: (
            <b>Cannot verify you email, please check the link and retry.</b>
          ),
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 my-11 mx-8">
      <h1 className="text-4xl text-white font-bold">
        {"> Email verification"}
      </h1>
      <div className="flex justify-center items-center h-full min-h-[500px]">
        <Card>
          <CardBody className="text-center gap-4">
            {loading ? (
              <>
                <Spinner size="lg" />
                <h1 className="text-4xl text-white font-bold">Processing</h1>
                <p className="text-xl text-white ">
                  Your email is being verified
                </p>
              </>
            ) : (
              <>
                <Image src={emailVerified} width={250} height={250} />
                <h1 className="text-4xl text-white font-bold">Hooray! 🎉</h1>
                <p className="text-xl text-white ">
                  Your email has been verified
                </p>
              </>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
