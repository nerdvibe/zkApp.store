import { Chip, Image, ScrollShadow } from "@nextui-org/react";
import "../style.css";
import FeaturedCard from "../FeaturedCard";
import cards from "@/mocks/featured-apps.json";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";
import { useCategoryQuery, useFeaturedAppsQuery } from "@/gql/generated_mock";

export default function FeaturedBanner() {
  const navigate = useNavigate();
  const { data } = useFeaturedAppsQuery({
    variables: {
      id: 2,
    },
  });

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-white text-xl">Featured</h1>
      </div>
      <div className="flex">
        <div className="flex flex-col md:flex-row banner w-full p-4 gap-28">
          <div className="flex flex-col gap-4 justify-center pl-10">
            {/* <Chip size="lg">#Category</Chip> */}
            <div className="flex flex-row gap-4">
              <Image
                src={data?.allCategories[0]?.thumbnails[0]}
                className="w-[100px] h-[100px] object-cover"
              />
              <div className="h-full flex justify-center flex-col">
                <h1 className="text-white text-xl font-bold">
                  #{data?.allCategories[0]?.name}
                </h1>
                <h3 className="text-white text-lg">123 Users</h3>
              </div>
            </div>
            {/* <Chip size="lg">User</Chip> */}
          </div>
          <ScrollShadow
            orientation="horizontal"
            className="flex flex-row gap-4 w-full"
          >
            {data?.allCategories[0]?.Products?.map((card, index) => (
              <FeaturedCard
                onClick={() => navigate(`${routes.PRODUCT}/${card?.id}`)}
                {...card}
                white={index % 2 === 0}
                key={`${index}`}
              />
            ))}
          </ScrollShadow>
        </div>
      </div>
    </>
  );
}
