import { Avatar, Chip, Image, ScrollShadow, Spinner } from "@nextui-org/react";
import "../style.css";
import FeaturedCard from "../FeaturedCard";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";
import { useFeaturedZkAppsQuery, useUserImageLazyQuery } from "@/gql/generated";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedBanner() {
  const navigate = useNavigate();
  const { data, loading } = useFeaturedZkAppsQuery();
  const [fetchUserImage, { data: userImage }] = useUserImageLazyQuery();

  const scrollContainerRef = useRef(null);

  const scrollToPosition = (position: number) => {
    // Check if the ref is available
    if (scrollContainerRef.current) {
      // Scroll the div to the specified position
      scrollContainerRef.current.scrollLeft += position;
    }
  };

  useEffect(() => {
    if (data?.zkApps && data?.zkApps[0]?.owner) {
      fetchUserImage({
        variables: {
          id: data?.zkApps[0]?.owner,
        },
      });
    }
  }, [data]);

  if (loading) {
    return (
      <div className="min-h-[300px] flex justify-center items-center w-full">
        <Spinner />
      </div>
    );
  }

  if (!data?.zkApps?.length) {
    return (
      <>
        <h1 className="text-white text-xl">Featured</h1>
        <div className="w-full flex items-center justify-center h-[200px] border-dashed border-2 border-gray-600 rounded-xl">
          <h1 className="text-white">No featured ZkApps</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-white text-xl">Featured</h1>
      </div>
      <div className="flex">
        <div className="flex flex-col lg:flex-row banner w-full p-4 gap-28">
          {!!data?.zkApps?.length && (
            <>
              <div className="flex flex-col gap-4 justify-center lg:pl-10 min-w-[300px] items-center lg:items-start mt-2 lg:mt-0">
                <h1 className="lg:hidden text-3xl text-white font-bold mb-4 lg:mb-0">
                  Highlighted ZkApp
                </h1>
                {data?.zkApps[0]?.category?.slug && (
                  <Chip
                    className="cursor-pointer hover:text-secondary-500 transition-all"
                    size="lg"
                    onClick={() => {
                      console.log("Test");
                      navigate(
                        `${routes.CATEGORY}/${data?.zkApps[0]?.category?.slug}`
                      );
                    }}
                  >
                    #{data?.zkApps[0]?.category?.name || "Uncategorized"}
                  </Chip>
                )}
                <div
                  className="flex flex-row gap-4 lg:items-start items-center cursor-pointer hover:bg-[#00000044] transition-all duration-300 p-2 rounded-md"
                  onClick={() =>
                    navigate(`${routes.PRODUCT}/${data?.zkApps[0]?.slug}`)
                  }
                >
                  <Image
                    src={
                      data?.zkApps[0].icon ||
                      `https://picsum.photos/seed/${data?.zkApps[0].slug}/400/400`
                    }
                    className="min-w-[100px] h-[100px] object-cover"
                  />
                  <div className="h-full flex justify-center flex-col">
                    <h1 className="force-white-text text-xl font-bold">
                      {data?.zkApps[0].name}
                    </h1>
                    <h3 className="force-white-text text-md">
                      {data?.zkApps[0]?.subtitle}
                    </h3>
                  </div>
                </div>
                <Chip
                  className="cursor-pointer hover:text-secondary-500 transition-all"
                  size="lg"
                  startContent={
                    <Avatar
                      size="sm"
                      className="w-[20px] h-[20px]"
                      src={userImage?.user?.profilePicture}
                    />
                  }
                  onClick={() =>
                    navigate(`${routes.PROFILE}/${data?.zkApps[0]?.owner}`)
                  }
                >
                  <p>@{data?.zkApps[0]?.ownerUsername}</p>
                </Chip>
              </div>
            </>
          )}
          <div className="w-full max-w-[100%] lg:max-w-[40vw] xl:max-w-[820px]">
            <ScrollShadow
              ref={scrollContainerRef}
              orientation="horizontal"
              className="flex flex-row gap-4 w-full"
            >
              {data?.zkApps
                ?.slice(1, data?.zkApps.length)
                .map((card, index) => (
                  <FeaturedCard
                    onClick={() => navigate(`${routes.PRODUCT}/${card?.slug}`)}
                    {...card}
                    white={index % 2 === 0}
                    key={`${index}`}
                  />
                ))}
            </ScrollShadow>
            <div className="w-full flex justify-between relative -top-[200px]">
              <FontAwesomeIcon
                className="cursor-pointer text-4xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                icon={faArrowLeft}
                color="white"
                onClick={() => scrollToPosition(-250)}
              />
              <FontAwesomeIcon
                className="cursor-pointer text-4xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                color="white"
                icon={faArrowRight}
                onClick={() => scrollToPosition(250)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
