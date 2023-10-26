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
  ListboxSection,
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
import { useSearchLazyQuery } from "@/gql/generated_mock";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";

export default function SearchModal() {
  const [inputValue, setInputValue] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showModal, text } = useSelector((state: RootState) => state.search);
  const debouncedSearchTerm = useDebounce<string>(inputValue, 500);
  const [searchApps, { data }] = useSearchLazyQuery();

  useEffect(() => {
    if (showModal) {
      setInputValue(text);
      searchApps({
        variables: {
          data: text,
        },
      });
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

      setTimeout(() => {
        searchApps({
          variables: {
            data: debouncedSearchTerm,
          },
        });
        setLoader(false);
      }, 1000);
    }
  }, [debouncedSearchTerm]);

  const openResult = (route: string, id?: string) => {
    navigate(`${route}/${id}`);
    dispatch(toggleModal({}));
  };

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
                  <Spinner label="Searching items" className="w-full" />
                ) : (
                  <ScrollShadow className="w-full flex gap-4 flex-wrap left-0 max-h-[325px]">
                    {data && (
                      <Listbox
                        variant="flat"
                        aria-label="Listbox menu with sections"
                        className="max-h-[500px]"
                      >
                        <ListboxSection title="zkApps" showDivider>
                          {data?.allProducts?.length ? (
                            data?.allProducts?.map((app) => (
                              <ListboxItem
                                key={app?.title}
                                description={app?.shortDescription}
                                onClick={() =>
                                  openResult(routes.PRODUCT, app?.id)
                                }
                                startContent={
                                  <Image
                                    src={app?.image}
                                    className="w-[50px] h-[50px] object-cover"
                                  />
                                }
                              >
                                {app?.title}
                              </ListboxItem>
                            ))
                          ) : (
                            <ListboxItem key={"no-zkapps"}>
                              No results
                            </ListboxItem>
                          )}
                        </ListboxSection>
                        <ListboxSection title="Users" showDivider>
                          {data?.allUsers?.length ? (
                            data?.allUsers?.map((app) => (
                              <ListboxItem
                                key={app?.username}
                                description={`${app?.followers} Followers`}
                                onClick={() =>
                                  openResult(routes.PROFILE, app?.id)
                                }
                                startContent={
                                  <Image
                                    src={app?.userImage}
                                    className="w-[50px] h-[50px] object-cover"
                                  />
                                }
                              >
                                {app?.username}
                              </ListboxItem>
                            ))
                          ) : (
                            <ListboxItem key={"no-users"}>
                              No results
                            </ListboxItem>
                          )}
                        </ListboxSection>
                        <ListboxSection title="Categories" showDivider>
                          {data?.allCategories?.length ? (
                            data?.allCategories?.map((app) => (
                              <ListboxItem
                                key={app?.name}
                                description={`${app?.Products?.length} zkApps`}
                                onClick={() =>
                                  openResult(routes.CATEGORY, app?.id)
                                }
                                startContent={
                                  <Image
                                    src={app?.thumbnails[0]}
                                    className="w-[50px] h-[50px] object-cover"
                                  />
                                }
                              >
                                #{app?.name}
                              </ListboxItem>
                            ))
                          ) : (
                            <ListboxItem key={"no-categories"}>
                              No results
                            </ListboxItem>
                          )}
                        </ListboxSection>
                      </Listbox>
                    )}
                  </ScrollShadow>
                )}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
