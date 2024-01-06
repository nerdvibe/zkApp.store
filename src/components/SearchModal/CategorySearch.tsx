import { useSearchCategoriesLazyQuery } from "@/gql/generated";
import { Image, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { useEffect, useState } from "react";
import routes from "@/routes";

interface IProps {
  openResult: (route: string, id?: string) => void;
  text?: string;
  debouncedSearchTerm?: string;
  showModal?: boolean;
  onApiCallComplete: () => void;
  parentLoading?: boolean;
}

export default function CategorySearch({
  debouncedSearchTerm,
  openResult,
  showModal,
  onApiCallComplete,
  parentLoading,
}: IProps) {
  const [searchCategory] = useSearchCategoriesLazyQuery();

  const [fetchedCategories, setFetchedCategories] = useState([]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setTimeout(() => {
        searchCategory({
          variables: {
            text: debouncedSearchTerm,
          },
        })
          .then((data) => {
            if (data?.data?.zkAppCategoriesSearch) {
              setFetchedCategories(data?.data?.zkAppCategoriesSearch);
            }
          })
          .finally(() => {
            onApiCallComplete();
          });
      }, 1000);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (parentLoading) {
      setFetchedCategories([]);
    }
  }, [parentLoading]);

  useEffect(() => {
    if (!showModal) {
      setFetchedCategories([]);
    }
  }, [showModal]);

  return !parentLoading ? (
    <Listbox
      variant="flat"
      aria-label="Listbox menu with sections"
      className="max-h-[500px]"
    >
      <ListboxSection title="Categories" showDivider>
        {fetchedCategories?.length ? (
          fetchedCategories?.map((app) => (
            <ListboxItem
              key={app?.name}
              description={`${app?.zkAppCount} zkApps`}
              onClick={() => openResult(routes.CATEGORY, app?.slug)}
              startContent={
                <Image
                  // TODO: Add thumbnail
                  src={"https://nextui.org/images/card-example-6.jpeg"}
                  className="w-[50px] h-[50px] object-cover"
                />
              }
            >
              #{app?.name}
            </ListboxItem>
          ))
        ) : (
          <ListboxItem key={"no-users"}>No results</ListboxItem>
        )}
      </ListboxSection>
    </Listbox>
  ) : (
    <></>
  );
}
