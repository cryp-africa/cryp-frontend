import React from "react";

import CustomLink from "@components/atoms/CustomLink";
import Icon from "@components/atoms/Icons";

const DesktopNavigation = () => {
  return (
    <div className="px-16 py-16 bigLaptop:px-20 absolute top-0">
      <CustomLink destination="/">
        <Icon name="logo" />
      </CustomLink>
    </div>
  );
};

export default DesktopNavigation;
