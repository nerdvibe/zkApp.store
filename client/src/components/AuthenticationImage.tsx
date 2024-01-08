import { Image } from "@nextui-org/react";

interface IAuthenticationImageProps {
  login?: boolean;
  noText?: boolean;
}

export default function AuthenticationImage({
  login,
  noText,
}: IAuthenticationImageProps) {
  return (
    <div className="flex-1 flex-col justify-end gap-10 items-center max-w-[500px] px-10 min-w-[350px] hidden lg:flex">
      <Image
        removeWrapper
        className="object-cover"
        alt="Relaxing app background"
        src={`/images/login-image.png`}
      />
      {!noText && (
        <div className="w-full">
          <h1 className="text-4xl text-white font-bold">
            {login ? "Login" : "Sign up"} to deploy
          </h1>
          <p>Publish your zkApps</p>
        </div>
      )}
    </div>
  );
}
