import { Avatar, Image, Listbox, ListboxItem } from "@nextui-org/react";
import mock from "@/mocks/user-profile.json";

export default function Settings() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-row gap-4 justify-between px-8">
        <div className="flex flex-row gap-4">
          <Avatar
            src={mock?.avatar || "/images/banner.png"}
            className="w-[100px] h-[100px] object-cover"
          />
          <div className="h-full flex flex-col justify-center">
            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-white text-3xl font-bold inline">
                @{mock?.username}
              </h1>
              <Image
                src="/icons/verified.png"
                className="inline min-w-[18px]"
              />
            </div>
            <p className="text-white text-lg">Your personal account</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex">
          <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
            <ListboxItem key="new">New file</ListboxItem>
            <ListboxItem key="copy">Copy link</ListboxItem>
            <ListboxItem key="edit">Edit file</ListboxItem>
            <ListboxItem key="delete" className="text-danger" color="danger">
              Delete file
            </ListboxItem>
          </Listbox>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
}
