import { Card, Skeleton } from "@nextui-org/react";

export default function EmptyStateCard() {
  return (
    <Card className="w-[400px] space-y-5 p-4  bg-[#1D1932]">
      <Skeleton className="rounded-lg">
        <div className="h-40 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-4 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-4 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <div className="flex flex-row w-full justify-between">
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        <div className="flex flex-row w-full justify-between">
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        <Skeleton className="w-full rounded-lg">
          <div className="h-8 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
