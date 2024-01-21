import { useKeyPress } from "@/hooks/useKeyPress";
import { toggleModal } from "@/store/search";
import { RootState } from "@/store/store";
import {
  Divider,
  Input,
  Kbd,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ScrollShadow,
  Spinner,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { SearchIcon } from "../SearchIcon";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserSearch from "./UserSearch";
import CategorySearch from "./CategorySearch";
import ZkAppSearch from "./ZkAppSearch";

export default function SearchModal() {
  const [inputValue, setInputValue] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [completedCalls, setCompletedCalls] = useState(0);
  const { showModal, text } = useSelector((state: RootState) => state.search);
  const debouncedSearchTerm = useDebounce<string>(inputValue, 500);

  const onKeyPress = () => {
    dispatch(toggleModal());
  };

  useKeyPress({ keys: ["k"], ctrl: true, callback: onKeyPress });

  useEffect(() => {
    if (!showModal) {
      setLoader(true);
    }
  }, [showModal]);

  useEffect(() => {
    if (showModal) {
      setInputValue(text);
    }
  }, [showModal, text]);

  // Effect for API call simulation
  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoader(true);
    }
  }, [debouncedSearchTerm]);

  const onApiCallComplete = () => {
    setCompletedCalls((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (completedCalls === 3 && loader) {
      setCompletedCalls(0);
      setLoader(false);
    }
  }, [completedCalls, loader]);

  const openResult = (route: string, id?: string) => {
    navigate(`${route}/${id}`);
    dispatch(toggleModal());
  };

  return (
    <Modal
      backdrop={"blur"}
      isOpen={showModal}
      onClose={() => {
        dispatch(toggleModal());
      }}
      className="max-w-[900px] p-0"
      hideCloseButton
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex gap-4 items-center">
              <Input
                autoFocus
                isClearable
                variant="bordered"
                radius="lg"
                classNames={{
                  inputWrapper: ["h-[60px]"],
                }}
                placeholder="Type to search..."
                startContent={
                  <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Kbd className="h-[30px]">ESC</Kbd>
            </ModalHeader>
            <ModalBody className="flex flex-col p-0 items-center px-4 pb-4 min-h-[150px]">
              <Divider />
              <div className="flex flex-col items-center justify-center min-h-[250px] w-full">
                {loader && (
                  <Spinner label="Searching items" className="w-full" />
                )}
                <ScrollShadow className="w-full flex gap-4 flex-wrap left-0 max-h-[325px]">
                  <ZkAppSearch
                    openResult={openResult}
                    showModal={showModal}
                    text={text}
                    onApiCallComplete={onApiCallComplete}
                    debouncedSearchTerm={debouncedSearchTerm}
                    parentLoading={loader}
                  />
                  <UserSearch
                    openResult={openResult}
                    showModal={showModal}
                    text={text}
                    onApiCallComplete={onApiCallComplete}
                    debouncedSearchTerm={debouncedSearchTerm}
                    parentLoading={loader}
                  />
                  <CategorySearch
                    openResult={openResult}
                    showModal={showModal}
                    text={text}
                    onApiCallComplete={onApiCallComplete}
                    debouncedSearchTerm={debouncedSearchTerm}
                    parentLoading={loader}
                  />
                </ScrollShadow>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
