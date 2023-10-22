import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ScrollShadow,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleProductModal } from "../store/product";
import { Link, useNavigate } from "react-router-dom";
import routes from "@/routes";
import MDEditor from "@uiw/react-md-editor";

const product = {
  title: "CyberpunKYC",
  author: "CryptoAuthor",
  description: `In an increasingly interconnected digital world, traditional
  KYC processes have become cumbersome, time-consuming, and
  vulnerable to data breaches. CyberpunKYC addresses these
  challenges head-on, combining the power of zero-knowledge
  proofs (zk-SNARKs) with the robustness of Mina Protocol to
  deliver a streamlined and secure KYC experience for businesses
  and individuals alike. Key Features: Privacy-Preserving:
  CyberpunKYC ...`,
  image: "https://nextui.org/images/hero-card.jpeg",
  rating: "4",
  productId: "1234",
};

export default function AppModal() {
  const { title, description, image, productId, rating, author } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => {
    return state.product;
  });

  const onClick = () => {
    dispatch(toggleProductModal({ active: false, productId: "" }));
    navigate(`${routes.PRODUCT}/${productId}`);
  };

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
            <ModalBody className="flex flex-col md:flex-row p-0">
              <div className="flex-1 ">
                <Image
                  alt="Card background"
                  className="object-cover w-full rounded-none h-full"
                  src={image}
                />
              </div>
              <div className="flex-1 p-8 pr-4 flex flex-col justify-between ">
                <div>
                  <h1 className="text-2xl font-bold">{title}</h1>
                  <div className="flex justify-between flex-col lg:flex-row">
                    <Link
                      className="text-primary hover:opacity-80 transition-all duration-300"
                      to={`${routes.PROFILE}/${author}`}
                    >
                      {author}
                    </Link>
                    <p className="text-sm">Score {rating}/5</p>
                  </div>
                </div>
                <ScrollShadow className="w-full flex gap-4 flex-wrap left-0 max-h-[325px]">
                  <MDEditor.Markdown
                    className="text-white"
                    source={description}
                    style={{ whiteSpace: "pre-wrap", background: "none" }}
                  />
                </ScrollShadow>
                <Button color="primary" onPress={onClick}>
                  Show more
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
