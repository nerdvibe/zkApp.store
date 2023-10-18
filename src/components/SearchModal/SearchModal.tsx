import { useKeyPress } from "@/hooks/useKeyPress";
import { toggleModal, searchApp } from "@/store/search";
import { RootState } from "@/store/store";
import {
  Divider,
  Image,
  Input,
  Kbd,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Spinner,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { SearchIcon } from "../SearchIcon";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";

export default function SearchModal() {
  const [inputValue, setInputValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { showModal, text } = useSelector((state: RootState) => state.search);
  const debouncedSearchTerm = useDebounce<string>(inputValue, 500);

  useEffect(() => {
    if (showModal) {
      setInputValue(text);
    }
  }, [showModal, text]);

  const onKeyPress = () => {
    dispatch(toggleModal({}));
  };

  useKeyPress({ keys: ["k"], ctrl: true, callback: onKeyPress });

  // Effect for API call simulation
  useEffect(() => {
    if (debouncedSearchTerm) {
      // Here you could call an API to search for items
      dispatch(searchApp({ value: debouncedSearchTerm }));
      setLoader(true);

      // Placeholder
      setTimeout(() => {
        setData([
          {
            title: "Test app",
            icon: "https://nextui.org/images/hero-card.jpeg",
            description: "This is a test app",
          },
          {
            title: "Test app 2",
            icon: "https://nextui.org/images/hero-card.jpeg",
            description: "This is a test app 2",
          },
          {
            title: "Test app 3",
            icon: "https://nextui.org/images/hero-card.jpeg",
            description: "This is a test app 3",
          },
        ]);
        setLoader(false);
      }, 1000);
    }
  }, [debouncedSearchTerm]);

  return (
    <Modal
      backdrop={"blur"}
      isOpen={showModal}
      onClose={() => {
        dispatch(toggleModal({}));
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
              <div className="flex flex-col items-center justify-center min-h-[150px] w-full">
                {loader ? (
                  <Spinner label="Searching items" />
                ) : (
                  data && (
                    <Listbox
                      variant="flat"
                      aria-label="Listbox menu with sections"
                    >
                      {data.map((app) => (
                        <ListboxItem
                          key={app.title}
                          description={app.description}
                          startContent={
                            <Image src={app.icon} className="max-w-[50px]" />
                          }
                        >
                          {app.title}
                        </ListboxItem>
                      ))}
                    </Listbox>
                  )
                )}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
