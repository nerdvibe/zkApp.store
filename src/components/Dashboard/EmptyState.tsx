import { Button } from "@nextui-org/react";
import EmptyStateCard from "./EmptyStateCard";
import PublishAppModal from "../PublishAppModal";
import { useDispatch } from "react-redux";
import { toggleNewProductModal } from "../../store/product";

export default function EmptyState() {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-10 flex-col">
      <div className="flex justify-center gap-8">
        <EmptyStateCard />
        <EmptyStateCard />
        <EmptyStateCard />
      </div>
      <div className="flex w-full justify-center">
        <Button
          color="primary"
          className="my-1 w-1/4 h-12"
          onClick={() =>
            dispatch(toggleNewProductModal({ active: true, productId: "" }))
          }
        >
          Publish zkApp
        </Button>
      </div>
      <PublishAppModal />
    </div>
  );
}
