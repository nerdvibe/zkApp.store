import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import PublishApp from "./PublishApp/PublishApp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleNewProductModal } from "../store/product";
import CustomCard from "./Card";

export default function PublishAppModal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state: RootState) => {
    return state.product.newProduct;
  });
  const newAppDetails = useSelector((state: RootState) => {
    return state.publishApp;
  });
  return (
    <Modal
      backdrop={"blur"}
      isOpen={showModal}
      onClose={() => {
        dispatch(toggleNewProductModal({ active: false }));
      }}
      className="max-w-[900px] p-0"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <h1>Publish a new zkApp</h1>
            </ModalHeader>
            <ModalBody className="flex flex-row p-0 items-center px-4">
              <PublishApp />
              <CustomCard {...newAppDetails} buttonColor="default" />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
