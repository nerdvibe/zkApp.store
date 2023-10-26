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
import { useProductLazyQuery } from "@/gql/generated_mock";
import { useEffect } from "react";

export default function AppModal() {
  const [fetchProductData, { data }] = useProductLazyQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => {
    return state.product;
  });

  useEffect(() => {
    fetchProductData({
      variables: {
        id: state.productId,
      },
    });
  }, [state.productId]);

  const onClick = () => {
    dispatch(toggleProductModal({ active: false, productId: "" }));
    navigate(`${routes.PRODUCT}/${state.productId}`);
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
        {() => (
          <>
            <ModalBody className="flex flex-col md:flex-row p-0">
              <div className="flex-1 ">
                <Image
                  alt="Card background"
                  className="object-cover w-full rounded-none h-full max-h-[200px] md:max-h-fit md:min-w-[300px]"
                  src={data?.Product?.image}
                  removeWrapper
                />
              </div>
              <div className="flex-1 p-8 pr-4 flex flex-col justify-between items-center ">
                <div className="w-full">
                  <h1 className="text-2xl font-bold">{data?.Product?.title}</h1>
                  <div className="flex justify-between flex-col lg:flex-row">
                    <Link
                      className="text-primary hover:opacity-80 transition-all duration-300"
                      to={`${routes.PROFILE}/${data?.Product?.user_id}`}
                    >
                      {data?.Product?.User?.username}
                    </Link>
                    <p className="text-sm">Score {data?.Product?.score}/5</p>
                  </div>
                </div>
                <ScrollShadow className="w-full flex gap-4 flex-wrap left-0 max-h-[325px]">
                  <MDEditor.Markdown
                    className="text-white md:min-w-[350px] md:max-w-[350px] lg:max-w-[450px]"
                    source={data?.Product?.description}
                    style={{
                      whiteSpace: "pre-wrap",
                      background: "none",
                      wordWrap: "break-word",
                    }}
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
