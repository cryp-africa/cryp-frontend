import { getNftData } from "lib/staticNftData";
import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";
import NFTPage from "@components/modules/NFTPage/NFTPage";

const NFT: NextPage = ({ staticFiles }: any) => {
  return (
    <BasePageLayout hideFooterOnMobile={true} title="Cryp NFT Page">
      <NFTPage staticFiles={staticFiles} />
    </BasePageLayout>
  );
};

export default NFT;

/**
 *
 * @return {any}
 */
export async function getStaticProps() {
  return {
    props: {
      staticFiles: getNftData(),
    },
  };
}
