import { cn } from "@nextui-org/react";

export const IconWrapper = ({
  children,
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={cn(
      className,
      "flex items-center rounded-small justify-center w-7 h-7"
    )}
  >
    {children}
  </div>
);
