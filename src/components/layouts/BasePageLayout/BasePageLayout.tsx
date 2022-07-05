import Head from "next/head";
import React from "react";

import DesktopNavigation from "@components/layouts/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "@components/layouts/MobileNavigation/MobileNavigation";
// import ParticlesContainer from "@components/ParticlesContainer/ParticlesContainer";
// import ParticlesContainer2 from "@components/ParticlesContainer2/ParticlesContainer2";

interface BasePageLayout {
  children: any;
  showNavigation?: boolean;
  showFooter?: boolean;
  title?: string;
  description?: string;
  keywords?: string;
}

const BasePageLayout = ({ children, showNavigation, showFooter, title, description, keywords }: BasePageLayout) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <section className="smallLaptop:px-0 relative">
        {showNavigation && (
          <>
            <div className="hidden smallLaptop:block smallLaptop:w-full smallLaptop:fixed smallLaptop:top-0 smallLaptop:z-50">
              <div className="bg-hotel2 bg-no-repeat h-screen bg-center absolute top-0 bottom-0 -z-[1] bg-cover" />
              {/* <ParticlesContainer /> */}
              <DesktopNavigation />
            </div>
            <div className="block w-full top-0 fixed z-50 smallLaptop:hidden">
              {/* <ParticlesContainer2 /> */}
              <MobileNavigation />
            </div>
          </>
        )}
        <main className="h-auto z-50">{children}</main>
      </section>
    </div>
  );
};

BasePageLayout.defaultProps = {
  showFooter: true,
  showNavigation: true,
  title: "Cryp",
  description: "A blockchain powered gateway",
  keywords: "crypto, blockchain, cryp, dapp, decentralized",
};

export default BasePageLayout;
