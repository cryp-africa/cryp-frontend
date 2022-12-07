import { getLearnData } from "lib/staticLearnData";
import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";
import LearnPage from "@components/modules/LearnPage/LearnPage";

import { Themes } from "@shared/libs/helpers";

const Learn: NextPage = ({ staticFiles }: any) => {
  return (
    <BasePageLayout hideFooterOnMobile={true} theme={Themes.LIGHT} title="Cryp Learn Page">
      <LearnPage staticFiles={staticFiles} />
    </BasePageLayout>
  );
};

export default Learn;

/**
 *
 * @return {any}
 */
export async function getStaticProps() {
  return {
    props: {
      staticFiles: getLearnData(),
    },
  };
}
