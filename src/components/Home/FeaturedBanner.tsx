import { Chip, Image, ScrollShadow } from "@nextui-org/react";
import "../style.css";
import FeaturedCard from "../FeaturedCard";

export default function FeaturedBanner() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-white text-xl">Featured</h1>
      </div>
      <div className="flex">
        <div className="flex flex-col md:flex-row banner w-full p-4 gap-28">
          <div className="flex flex-col gap-4 justify-center pl-10">
            <Chip size="lg">#Category</Chip>
            <div className="flex flex-row gap-4">
              <Image src="/images/user-image.png" className="min-w-[50px]" />
              <div className="h-full flex justify-center flex-col">
                <h1 className="text-white text-xl font-bold">ArtChainX</h1>
                <h3 className="text-white text-lg">123 Users</h3>
              </div>
            </div>
            <Chip size="lg">User</Chip>
          </div>
          <ScrollShadow
            orientation="horizontal"
            className="flex flex-row gap-4 w-full"
          >
            <FeaturedCard />
            <FeaturedCard white />
            <FeaturedCard />
            <FeaturedCard white />
            <FeaturedCard />
          </ScrollShadow>
        </div>
      </div>
    </>
  );
}
