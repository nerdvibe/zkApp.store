import Jdenticon from "react-jdenticon";

export default function UserIcon({
  value,
  size,
}: {
  value: string;
  size?: string;
}) {
  return <Jdenticon value={value} size={size || "100"} />;
}
