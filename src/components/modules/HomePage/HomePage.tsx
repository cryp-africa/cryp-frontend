import React from "react";

import MobileFooter from "@components/layouts/MobileFooter/MobileFooter";
import Building from "@components/organisms/LandingPage/Building/Building";
import DaoCommunity from "@components/organisms/LandingPage/DAOCommunity/DAOCommunity";
import Media from "@components/organisms/LandingPage/Media/Media";
import OurAdvisors from "@components/organisms/LandingPage/OurAdvisors/OurAdvisors";
import OurPartners from "@components/organisms/LandingPage/OurPartners/OurPartners";
import ShowCase from "@components/organisms/LandingPage/ShowCase/ShowCase";
import Solutions from "@components/organisms/LandingPage/Solutions/Solutions";
import News from "@components/organisms/News/News";

const HomePage = () => {
  return (
    <div className="tablet:px-4 smallLaptop:px-18 desktop:px-16 bg-downsizeMobile smallLaptop:bg-downsizeDesktop bg-cover bg-center bg-no-repeat">
      <Building />
      <ShowCase />
      <Solutions />
      <hr className="border-1 border-[#114443] w-[274px] tablet:w-[1224px] mx-auto mb-12" />
      <DaoCommunity />
      <OurPartners />
      <Media />
      <OurAdvisors />
      <hr className="border-1 border-[#114443] w-[274px] tablet:w-[1224px] mx-auto mb-12 mt-4" />
      <News />
      <MobileFooter />
    </div>
  );
};

export default HomePage;
