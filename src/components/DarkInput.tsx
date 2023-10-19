import { Input } from "@nextui-org/react";

export default function DarkInput(props: any) {
  return (
    <Input
      classNames={{
        label: "text-black/50 dark:text-white/90 purple-dark:text-white/90",
        input: [
          "bg-transparent",
          "text-white dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
          "border-color:black"
        ],
      }}
      {...props}
    />
  );
}
