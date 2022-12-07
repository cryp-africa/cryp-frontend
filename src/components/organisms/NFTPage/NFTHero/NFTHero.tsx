import Image from "next/image";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

import NFTStats from "../NFTStats/NFTStats";

const NFTHero = ({ staticFiles }: any) => {
  const url = process.env.NEXT_PUBLIC_GATEWAY_URL ? process.env.NEXT_PUBLIC_GATEWAY_URL : "https://app.cryp.africa";

  return (
    <div className="pt-32 flex flex-col tablet:flex-row items-center bigLaptop:pt-48 pb-16 smallLaptop:pb-36 pl-4 smallLaptop:pl-[3.125rem]">
      <div>
        <h3 className="uppercase mb-[3.125rem] font-semibold text-20 w-[19.5rem] smallLaptop:text-30 bigLaptop:text-47 smallLaptop:w-[31.25rem] bigLaptop:w-[45.313rem] leading-[3.563rem]">
          <span className="text-crypYellow-200">create,</span> distribute, and sell your <span className="text-crypYellow-200">nfts</span>
        </h3>
        <p className="w-[19.5rem] smallLaptop:w-[37.188rem] font-medium text-14 smallLaptop:text-18 opacity-60 mb-[3.125rem]">
          We believe you have a unique taste, so explore and discover the endless possibilities of the CRYP NFT world
        </p>
        <CustomButton
          customClass="mt-12 tablet:mb-12 smallLaptop:mb-0 w-[10.25rem] h-[3.75] !w-[14.375rem] smallLaptop:h-[5rem] smallLaptop:w-[12rem] !text-white !w-[19.688rem] hover:!bg-crypGreen-800"
          handleClick={() => window.open(`${url}/auth/sign-up`, "_blank")}
          isTransparent={true}
          size={ButtonProperties.SIZES.big}
          title="CREATE A FREE ACCOUNT"
          variant={ButtonProperties.VARIANT.primary.name}
        />
        <div className="hidden tablet:block">
          <NFTStats />
        </div>
      </div>
      <div>
        <Image alt="nft hero" height={789} src={staticFiles.heroImage} width={752} />
        <div className="block pl-4 tablet:hidden">
          <NFTStats />
        </div>
      </div>
    </div>
  );
};

export default NFTHero;
