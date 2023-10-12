import { Select, SelectItem } from "@nextui-org/react";
import UpdateCard from "./PublishUpdate/UpdateCard";
import AddUpdateCard from "./PublishUpdate/AddUpdateCard";

const userApps = [
  {
    label: "CyberpunKYC",
    value: "CyberpunKYC",
  },
];

export default function PublishUpdate() {
  return (
    <div className="w-full flex flex-col gap-4 max-w-[2000px] items-center">
      <div className="w-full flex justify-end">
        <Select size={"md"} label="Select an app" className="max-w-xs">
          {userApps.map((app) => (
            <SelectItem
              className="text-white"
              key={app.value}
              value={app.value}
            >
              {app.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex w-full flex-wrap gap-5 justify-center">
          <AddUpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
        </div>
      </div>
    </div>
  );
}
