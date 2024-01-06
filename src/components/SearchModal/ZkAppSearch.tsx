import { useSearchZkAppLazyQuery } from "@/gql/generated";
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

export default function ZkAppSearch({
  debouncedSearchTerm,
  openResult,
  showModal,
  onApiCallComplete,
  parentLoading,
}: IProps) {
  const [searchCategory] = useSearchZkAppLazyQuery();

  const [fetchedZkApps, setFetchedZkApps] = useState([]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setTimeout(() => {
        searchCategory({
          variables: {
            name: debouncedSearchTerm,
          },
        })
          .then((data) => {
            if (data?.data?.searchZkAppByName) {
              setFetchedZkApps(data?.data?.searchZkAppByName);
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
      setFetchedZkApps([]);
    }
  }, [parentLoading]);

  useEffect(() => {
    if (!showModal) {
      setFetchedZkApps([]);
    }
  }, [showModal]);

  return !parentLoading ? (
    <Listbox
      variant="flat"
      aria-label="Listbox menu with sections"
      className="max-h-[500px]"
    >
      <ListboxSection title="ZkApps" showDivider>
        {fetchedZkApps?.length ? (
          fetchedZkApps?.map((app) => (
            <ListboxItem
              key={app?.name}
              description={app?.subtitle}
              onClick={() => openResult(routes.PRODUCT, app?.slug)}
              startContent={
                <Image
                  // TODO: Replace placeholder
                  src={
                    app?.icon ||
                    `https://picsum.photos/seed/${app?.slug}/400/400`
                  }
                  className="w-[50px] h-[50px] object-cover"
                />
              }
            >
              {app?.name}
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
