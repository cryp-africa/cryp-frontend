import CustomLink from "@components/atoms/CustomLink";
import Icon from "@components/atoms/Icons";
import React from "react";

const MobileNavigation = () => {
  return (
    <div className="px-8 py-16">
      <CustomLink destination="/">
        <Icon name="logo" />
      </CustomLink>
    </div>
  );
};

export default MobileNavigation;
