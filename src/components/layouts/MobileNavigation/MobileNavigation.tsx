import React from "react";

import CustomLink from "@components/atoms/CustomLink";
import Icon from "@components/atoms/Icons";

const MobileNavigation = () => {
  return (
    <div className="px-16 w-full py-16 bigLaptop:px-20 flex justify-between items-center bg-black">
      <CustomLink destination="/">
        <Icon name="logo" />
      </CustomLink>
    </div>
  );
};

export default MobileNavigation;
