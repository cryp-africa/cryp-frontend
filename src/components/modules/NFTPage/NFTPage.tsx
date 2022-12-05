import React from "react";

import MobileFooter from "@components/layouts/MobileFooter/MobileFooter";
import NFTHero from "@components/organisms/NFTPage/NFTHero/NFTHero";
import PopularNFTS from "@components/organisms/NFTPage/PopularNFTS/PopularNFTS";

const NFTPage = () => {
  return (
    <div className="bg-downsizeMobile smallLaptop:bg-downsizeDesktop bg-cover bg-center bg-no-repeat text-white bg-black">
      <div className="max-w-[90rem] mx-auto">
        <NFTHero />
        <hr className="pb-[7.75rem] border-1 border-[#114443] w-[17.125rem] tablet:w-[76.5rem] mx-auto mt-4" />
        <PopularNFTS />
      </div>
      <MobileFooter />
    </div>
  );
};

export default NFTPage;
