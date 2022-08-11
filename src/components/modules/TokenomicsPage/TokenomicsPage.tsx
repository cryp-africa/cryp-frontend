import React from "react";

import MobileFooter from "@components/layouts/MobileFooter/MobileFooter";
import RelatedRead from "@components/organisms/TokenomicsPage/RelatedRead/RelatedRead";
import TokenomicsImg from "@components/organisms/TokenomicsPage/TokenomicsImg/TokenomicsImg";
import TokenomicsV1 from "@components/organisms/TokenomicsPage/TokenomicsV1/TokenomicsV1";

const TokenomicsPage = () => {
  return (
    <div className="tablet:px-4 smallLaptop:px-18 desktop:px-56 bg-white">
      <TokenomicsImg />
      <div className="mx-auto w-full">
        <TokenomicsV1 />
        <hr className="border-1 border-[#114443] w-[274px] tablet:w-[1224px] mb-12 mt-4" />
        <RelatedRead />
      </div>
      <MobileFooter />
    </div>
  );
};

export default TokenomicsPage;
