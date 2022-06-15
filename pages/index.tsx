import React from "react";
import type { NextPage } from "next";
import HomePage from "@pages/HomePage/HomePage";
import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

const Home: NextPage = () => {
  return (
    <BasePageLayout title="Cryp Home Page">
      <HomePage />
    </BasePageLayout>
  );
};

export default Home;
