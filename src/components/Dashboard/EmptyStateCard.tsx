import { toggleNewProductModal } from "@/store/product";
import { Button, Card, Skeleton } from "@nextui-org/react";
import { useDispatch } from "react-redux";

export default function EmptyStateCard({ add }: { add?: boolean }) {
  const dispatch = useDispatch();
  return (
    <Card className="min-w-[250px] w-[250px] space-y-5 p-4 bg-[none] border-dashed border-2 border-gray-600">
      <Skeleton isLoaded className="rounded-lg">
        <div className="h-40 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton isLoaded className="w-3/5 rounded-lg">
          <div className="h-4 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton isLoaded className="w-4/5 rounded-lg">
          <div className="h-4 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <div className="flex flex-row w-full justify-between">
          <Skeleton isLoaded className="w-2/5 rounded-lg">
            <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton isLoaded className="w-2/5 rounded-lg">
            <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        <div className="flex flex-row w-full justify-between">
          <Skeleton isLoaded className="w-2/5 rounded-lg">
            <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton isLoaded className="w-2/5 rounded-lg">
            <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        {add ? (
          <div className="w-full">
            <Button
              color="primary"
              className="my-1 w-full h-12"
              onClick={() =>
                dispatch(toggleNewProductModal({ active: true, productId: "" }))
              }
            >
              Publish zkApp
            </Button>
          </div>
        ) : (
          <Skeleton isLoaded className="w-full rounded-lg">
            <div className="rounded-lg bg-default-300 h-[50px]"></div>
          </Skeleton>
        )}
      </div>
    </Card>
  );
}
