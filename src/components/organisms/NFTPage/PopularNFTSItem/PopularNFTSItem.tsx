import Image from "next/image";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { CURRENCIES } from "@shared/libs/helpers";

interface PopularNFTSItemProps {
  nft: any;
}

const PopularNFTSItem: React.FC<PopularNFTSItemProps> = ({ nft }) => {
  return (
    <div className="w-[16.375rem] smallLaptop:w-[24.125rem] h-[22.813rem] smallLaptop:h-[32.875rem] rounded-[1.25rem] bg-glass-600 relative">
      <Image height={526} src={nft.avatarUrl} width={386} />
      <div className="absolute bottom-0 bg-glass-700 backdrop-blur-[3.125rem] h-[7.438rem] w-full pl-6 pr-[2.125rem]">
        <h4 className="font-bold mt-[0.75rem] mb-[1.375rem]">{nft.productName}</h4>
        <div className="flex items-center justify-between">
          <div>
            <h5 className="capitalize text-12 smallLaptop:tex-14 font-medium opacity-70 mb-[0.375rem]">selling price</h5>
            <p className="font-bold text-12 smallLaptop:text-14">
              {CURRENCIES.NAIRA}
              {nft.price.toLocaleString()}
            </p>
          </div>
          <CustomButton customClass="!text-12 smalllLaptop:!text-14" handleClick={() => {}} isGhost={true} title="View Work" />
        </div>
      </div>
    </div>
  );
};

export default PopularNFTSItem;
