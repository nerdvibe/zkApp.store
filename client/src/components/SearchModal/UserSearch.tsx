import { useSearchUserLazyQuery } from "@/gql/generated";
import {
  Avatar,
  Listbox,
  ListboxItem,
  ListboxSection,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import UserIcon from "../User/UserIcon";
import routes from "@/routes";

interface IProps {
  openResult: (route: string, id?: string) => void;
  text?: string;
  debouncedSearchTerm?: string;
  showModal?: boolean;
  onApiCallComplete: () => void;
  parentLoading?: boolean;
}

export default function UserSearch({
  debouncedSearchTerm,
  openResult,
  showModal,
  onApiCallComplete,
  parentLoading,
}: IProps) {
  const [searchUsers] = useSearchUserLazyQuery();
  const [fetchedUsers, setFetchedUsers] = useState([]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setTimeout(() => {
        searchUsers({
          variables: {
            username: debouncedSearchTerm,
          },
        })
          .then((data) => {
            if (data?.data?.userSearch) {
              setFetchedUsers(data?.data?.userSearch);
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
      setFetchedUsers([]);
    }
  }, [parentLoading]);

  useEffect(() => {
    if (!showModal) {
      setFetchedUsers([]);
    }
  }, [showModal]);

  return !parentLoading ? (
    <Listbox
      variant="flat"
      aria-label="Listbox menu with sections"
      className="max-h-[500px]"
    >
      <ListboxSection title="Users" showDivider>
        {fetchedUsers?.length ? (
          fetchedUsers?.map((app) => (
            <ListboxItem
              key={app?.username}
              description={`${app?.followerCount} Followers`}
              onClick={() => openResult(routes.PROFILE, app?.id)}
              startContent={
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="default"
                  name={app?.username}
                  size="sm"
                  src={app?.profilePicture}
                  fallback={
                    <UserIcon value={app?.username || ""} size={"30"} />
                  }
                />
              }
            >
              {app?.username}
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
