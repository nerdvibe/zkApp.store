import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  title?: string;
  minHeight?: number;
}

export default function AuthenticationForm({
  children,
  title,
  minHeight,
}: IProps) {
  return (
    <div className="flex flex-col gap-4 md:my-11 mx-8">
      <h1 className="text-4xl text-white font-bold">{title}</h1>
      <div
        className={`flex flex-row gap-4 h-full my-10 max-h-[${
          minHeight || 400
        }px] justify-center flex-wrap`}
      >
        {children}
      </div>
    </div>
  );
}
