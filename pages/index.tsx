import { getHomeData } from "lib/staticHomeData";
import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";
import HomePage from "@components/modules/HomePage/HomePage";

const Home: NextPage = ({ staticFiles }: any) => {
  return (
    <BasePageLayout hideFooterOnMobile={true} title="Cryp Home Page">
      <HomePage staticFiles={staticFiles} />
    </BasePageLayout>
  );
};

export default Home;

/**
 *
 * @return {any}
 */
export async function getStaticProps() {
  return {
    props: {
      staticFiles: getHomeData(),
    },
  };
}
