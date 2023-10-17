import NewUsersCard from "@/components/Charts/NewUsers/NewUsersCard";
import Reviews from "@/components/Charts/Reviews/Reviews";
import SearchImpression from "@/components/Charts/SearchImpression/SearchImpression";
import { UserApps } from "@/pages/Dashboard";
import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

interface IAnalytics {
  apps: UserApps[];
}

export default function Analytics({ apps }: IAnalytics) {
  const [selectedApp, setSelectedApp] = useState("");
  return (
    <div className="flex gap-4 w-full flex-col">
      <div>
        <div className="w-full flex justify-end">
          <Select
            size={"md"}
            label="Select an app"
            className="max-w-xs text-white"
            onChange={(e) => setSelectedApp(e.target.value)}
          >
            <SelectItem className="text-white" key={""} value={""}>
              Overall
            </SelectItem>
            {apps.map((app) => (
              <SelectItem className="text-white" key={app.id} value={app.id}>
                {app.title}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="flex w-full gap-4 flex-wrap">
        <Reviews />
        <NewUsersCard />
        <SearchImpression />
      </div>
    </div>
  );
}
