import { getPaymentsData } from "lib/staticPaymentsData";
import type { NextPage } from "next";
import React from "react";

import PaymentLayout from "@components/layouts/PaymentLayout/PaymentLayout";
import PaymentPage from "@components/modules/PaymentPage/PaymentPage";

import { Themes } from "@shared/libs/helpers";

const Payments: NextPage = ({ staticFiles }: any) => {
  return (
    <PaymentLayout hideFooterOnMobile={true} theme={Themes.LIGHT} title="Cryp Gateway">
      <PaymentPage staticFiles={staticFiles} theme={Themes.LIGHT} />
    </PaymentLayout>
  );
};

export default Payments;

/**
 *
 * @return {any}
 */
export async function getStaticProps() {
  return {
    props: {
      staticFiles: getPaymentsData(),
    },
  };
}
