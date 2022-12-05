import React from "react";

const NFTStats = () => {
  const NFTHeroData = [
    {
      id: 1,
      title: "Creators",
      count: "10k+",
    },
    {
      id: 2,
      title: "NFTs",
      count: "300k+",
    },
    {
      id: 1,
      title: "Categories",
      count: "5k+",
    },
  ];
  return (
    <div className="flex items-center  smallLaptop:mt-[130px]">
      {NFTHeroData.map((nft) => (
        <div className="mr-[3.688rem]" key={nft.id}>
          <h2 className="font-bold text-16 smallLaptop:text-40 smallLaptop:opacity-80 mb-[1.625rem]">{nft.count}</h2>
          <h5 className="text-14 smallLaptop:text-20 font-semibold opacity-70">{nft.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default NFTStats;
