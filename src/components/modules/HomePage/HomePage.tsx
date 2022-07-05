import React from "react";

import Building from "@components/organisms/LandingPage/Building/Building";
import DaoCommunity from "@components/organisms/LandingPage/DAOCommunity/DAOCommunity";
import Media from "@components/organisms/LandingPage/Media/Media";
import OurAdvisors from "@components/organisms/LandingPage/OurAdvisors/OurAdvisors";
import OurPartners from "@components/organisms/LandingPage/OurPartners/OurPartners";
import Solutions from "@components/organisms/LandingPage/Solutions/Solutions";

const HomePage = () => {
  return (
    <div className="tablet:px-4 smallLaptop:px-32 desktop:px-16">
      <Building />
      <Solutions />
      <DaoCommunity />
      <OurPartners />
      <Media />
      <OurAdvisors />
    </div>
  );
};

export default HomePage;
