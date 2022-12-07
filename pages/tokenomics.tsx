import { getTokenomicsData } from "lib/staticTokenomicsData";
import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";
import TokenomicsPage from "@components/modules/TokenomicsPage/TokenomicsPage";

import { Themes } from "@shared/libs/helpers";

const Tokenomics: NextPage = ({ staticFiles }: any) => {
  return (
    <BasePageLayout hideFooterOnMobile={true} theme={Themes.LIGHT} title="Cryp Tokenomics Page">
      <TokenomicsPage staticFiles={staticFiles} />
    </BasePageLayout>
  );
};

export default Tokenomics;

/**
 *
 * @return {any}
 */
export async function getStaticProps() {
  return {
    props: {
      staticFiles: getTokenomicsData(),
    },
  };
}
