import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleProductModal } from "../store/product";

export default function AppModal() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => {
    return state.product;
  });
  return (
    <Modal
      backdrop={"blur"}
      isOpen={state.active}
      onClose={() => {
        dispatch(toggleProductModal({ active: false, productId: "" }));
      }}
      className="max-w-[900px] p-0"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="flex flex-row p-0">
              <div className="flex-2">
                <Image
                  alt="Card background"
                  className="object-cover w-full rounded-none h-full"
                  src="https://nextui.org/images/hero-card.jpeg"
                />
              </div>
              <div className="flex-1 p-8 pr-4 gap-10 flex flex-col  ">
                <h1 className="text-2xl font-bold">CyberpunKYC</h1>
                <p>
                  In an increasingly interconnected digital world, traditional
                  KYC processes have become cumbersome, time-consuming, and
                  vulnerable to data breaches. CyberpunKYC addresses these
                  challenges head-on, combining the power of zero-knowledge
                  proofs (zk-SNARKs) with the robustness of Mina Protocol to
                  deliver a streamlined and secure KYC experience for businesses
                  and individuals alike. Key Features: Privacy-Preserving:
                  CyberpunKYC ...
                </p>
                <div className="flex w-full justify-between px-10">
                  <Button variant="light" onPress={onClose}>
                    Details
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
