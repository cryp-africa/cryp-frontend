import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";
import NFTPage from "@components/modules/NFTPage/NFTPage";

const NFT: NextPage = () => {
  return (
    <BasePageLayout hideFooterOnMobile={true} title="Cryp NFT Page">
      <NFTPage />
    </BasePageLayout>
  );
};

export default NFT;
