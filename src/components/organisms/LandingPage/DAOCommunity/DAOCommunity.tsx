import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

const DaoCommunity = () => {
  const handleJoinCommunity = () => {
    window.open("https://t.me/CrypAfrica", "_blank");
  };
  return (
    <div className="flex justify-center items-center relative">
      <div className="relative w-full smallLaptop:w-[76%]">
        <h3 className="font-semibold text-20 smallLaptop:text-[2.938rem] mb-4 smallLaptop:mb-8 text-center whitespace-nowrap">Our Decentralized Community</h3>
        <div className="flex items-center justify-center">
          <p className="font-medium text-center text-18 text-white opacity-60 smallLaptop:opacity-70 w-[80%] smallLaptop:w-full bigLaptop:w-[70%] my-8">
            Join a community of aspiring and existing entrepreneurs, creators (arts, fashion, etc), designers, gig workers and sellers in the social commerce space. We are building
            a decentralized autonomous community which would be empowered.
          </p>
        </div>

        {/* <div className="flex overflow-x-scroll pt-8 smallLaptop:pt-16 bigLaptop:pb-16 hide-scrollbar scroll-smooth flex-nowrap relative" id="dao">
          {DAOCommunityData.map((dao) => (
            <div className="mx-4 rounded-[0.75rem] bg-black bg-blend-multiply relative basis-auto smallLaptop:w-[24.313rem] shrink-0 grow-0" key={dao.id}>
              <div className="hidden smallLaptop:block">
                <Image height={369} src={dao.image_url} width={389} />
              </div>
              <div className="block smallLaptop:hidden">
                <Image height={161} src={dao.image_url} width={169} />
              </div>
              <div className={`px-2 smallLaptop:p-5 bottom-[0.313rem] h-[40%] w-[169px] smallLaptop:w-full absolute bg-${dao.bg} rounded-md`}>
                <h3 className="text-12 smallLaptop:text-20 font-medium z-20 uppercase mt-4 smallLaptop:font-semibold !opacity-100">{dao.title}</h3>
                <CustomLink customClass="hidden smallLaptop:block text-16 z-20 absolute bottom-3 font-semibold text-crypYellow-200 !flex items-center" destination="#">
                  Read More <Icon className="ml-4" name="yellowArrowRight" />
                </CustomLink>
              </div>
            </div>
          ))}
        </div> */}
        <div className="flex justify-center items-center mb-8">
          <CustomButton
            customClass="mt-12 w-[10.25rem] h-[3.75] bigLaptop:h-[5rem] bigLaptop:w-[12rem]"
            handleClick={handleJoinCommunity}
            size={ButtonProperties.SIZES.small}
            title="JOIN COMMUNITY"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
      </div>
      {/* <div className="hidden smallLaptop:block">
        <Icon className="ml- cursor-pointer absolute top-[52%] right-28 smallLaptop:right-10 bigLaptop:right-28" name="proceed" onClick={() => slideRight("dao", 1200)} />
      </div>
      <div className="hidden smallLaptop:block">
        <Icon className="ml- cursor-pointer absolute top-[52%] left-28 smallLaptop:left-10 bigLaptop:left-28" name="yellowArrowLeft" onClick={() => slideLeft("dao", 1200)} />
      </div> */}
    </div>
  );
};

export default DaoCommunity;
