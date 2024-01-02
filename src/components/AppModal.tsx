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
import { useEffect } from "react";
import { useAppDataLazyQuery } from "@/gql/generated";

export default function AppModal() {
  const state = useSelector((state: RootState) => {
    return state.product;
  });
  const [fetchProductData, { data }] = useAppDataLazyQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.productId) {
      fetchProductData({
        variables: {
          slug: state.productId,
        },
      });
    }
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
                {data?.zkApp?.icon ? (
                  <Image
                    alt="Card background"
                    className="object-cover w-full rounded-none h-full max-h-[200px] md:max-h-fit md:min-w-[300px]"
                    src={data?.zkApp?.icon}
                    removeWrapper
                  />
                ) : (
                  <div className="min-h-[200px] md:min-h-[300px] m-4 border-dashed border-[5px] border-[#ffffff66] rounded-2xl flex justify-center items-center">
                    <p className="text-sm text-[#ffffff66]">
                      Missing ZkApp icon
                    </p>
                  </div>
                )}
              </div>
              <div className="flex-1 p-8 pr-4 flex flex-col justify-between items-center ">
                <div className="w-full">
                  <h1 className="text-2xl font-bold">{data?.zkApp?.name}</h1>
                  <div className="flex justify-between flex-col lg:flex-row">
                    <Link
                      className="text-primary hover:opacity-80 transition-all duration-300"
                      to={`${routes.PROFILE}/${data?.zkApp?.owner}`}
                    >
                      @{data?.zkApp?.ownerUsername}
                    </Link>
                    <p className="text-sm">
                      Score {data?.zkApp?.reviewScore || 5}/5 (
                      {data?.zkApp?.reviewCount} Reviews)
                    </p>
                  </div>
                </div>
                <ScrollShadow className="w-full flex gap-4 flex-wrap left-0 max-h-[325px] my-5">
                  <MDEditor.Markdown
                    className="text-white md:min-w-[350px] md:max-w-[350px] lg:max-w-[450px]"
                    source={
                      data?.zkApp?.body || "There isn't a description yet"
                    }
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
