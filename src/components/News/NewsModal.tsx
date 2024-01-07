import routes from "@/routes";
import { hideModal } from "@/store/newsModal";
import { RootState } from "@/store/store";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ScrollShadow,
} from "@nextui-org/react";
import MDEditor from "@uiw/react-md-editor";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NewsModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, banner, body, showModal, ctaLink } = useSelector(
    (state: RootState) => state.newsModal
  );

  return (
    <Modal
      backdrop={"blur"}
      isOpen={showModal}
      onClose={() => {
        dispatch(hideModal());
        navigate(routes.HOME);
      }}
      className="max-w-[900px] p-0"
    >
      <ModalContent>
        <ModalBody className="flex flex-col md:flex-row p-0">
          {banner && (
            <div className="flex-1 ">
              <Image
                alt="Card background"
                className="object-cover w-full rounded-none h-full max-h-[200px] md:max-h-fit md:min-w-[300px]"
                src={banner}
                removeWrapper
              />
            </div>
          )}
          <div className="flex-1 p-8 pr-4 flex flex-col items-center w-full">
            <div className="w-full">
              <h1 className="text-4xl font-bold">{title}</h1>
            </div>
            <div className="flex flex-col justify-between w-full">
              <ScrollShadow className="w-full flex gap-4 flex-wrap left-0 max-h-[50vh] my-5">
                <MDEditor.Markdown
                  className="text-white md:min-w-[350px] md:max-w-[350px] lg:max-w-[450px]"
                  source={body || "There isn't a description"}
                  style={{
                    whiteSpace: "pre-wrap",
                    background: "none",
                    wordWrap: "break-word",
                  }}
                />
              </ScrollShadow>
              {ctaLink && (
                <div className="flex w-full justify-center mt-2">
                  <Button
                    color="primary"
                    onClick={() => window.open(ctaLink, "_blank")}
                  >
                    Learn more
                  </Button>
                </div>
              )}
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
