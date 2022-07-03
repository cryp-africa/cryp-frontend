import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import HomePage from "@pages/HomePage/HomePage";

const Home: NextPage = () => {
  return (
    <BasePageLayout title="Cryp Home Page">
      <HomePage />
    </BasePageLayout>
  );
};

export default Home;
