import Building from "@components/Building/Building";
import ScrollDown from "@components/ScrollDown/ScrollDown";
import React from "react";

const HomePage = () => {
  return (
    <div className="px-8 smallLaptop:px-48">
      <Building />
      <ScrollDown />
    </div>
  );
};

export default HomePage;
