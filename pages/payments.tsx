import type { NextPage } from "next";
import React from "react";

import PaymentLayout from "@components/layouts/PaymentLayout/PaymentLayout";
import PaymentPage from "@components/modules/PaymentPage/PaymentPage";

import { Themes } from "@shared/libs/helpers";

const Home: NextPage = () => {
  return (
    <PaymentLayout hideFooterOnMobile={true} theme={Themes.LIGHT} title="Cryp Gateway">
      <PaymentPage />
    </PaymentLayout>
  );
};

export default Home;
