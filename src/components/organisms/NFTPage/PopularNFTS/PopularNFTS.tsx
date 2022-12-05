import React from "react";

import PopularNFTSItem from "../PopularNFTSItem/PopularNFTSItem";

const PopularNFTS = () => {
  const PopularNFTSData = [
    {
      id: 1,
      thumbail: "/images/nft/pop-thumb.png",
      avatarUrl: "/images/nft/pop-nft1.png",
      productName: "Beta Clone #77867",
      price: 23000,
    },
    {
      id: 2,
      thumbail: "/images/nft/pop-thumb.png",
      avatarUrl: "/images/nft/pop-nft2.png",
      productName: "Beta Clone #77867",
      price: 23000,
    },
    {
      id: 3,
      thumbail: "/images/nft/pop-thumb.png",
      avatarUrl: "/images/nft/pop-nft3.png",
      productName: "Beta Clone #77867",
      price: 23000,
    },
  ];
  return (
    <div className="pb-[37.25rem]">
      <h1 className="text-20 smallLaptop:text-30 pl-4 smallLaptop:pl-8 font-bold mb-[3.125rem]">Popular NFTS</h1>
      <div className="flex flex-col justify-center items-center space-y-8 tablet:space-y-0 tablet:pl-8 tablet:grid tablet:grid-cols-2 bigLaptop:grid-cols-3 tablet:gap-6">
        {PopularNFTSData.map((nft) => (
          <PopularNFTSItem key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
};

export default PopularNFTS;
