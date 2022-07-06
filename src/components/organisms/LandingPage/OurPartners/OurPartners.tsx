import React from "react";

import CustomButton from "@components/atoms/CustomButton";
import Icon from "@components/atoms/Icons";
import { OurPartnersData } from "@components/componentData/OurPartnersData/OurPartnersData";

import { ButtonProperties } from "@shared/libs/helpers";

const OurPartners = () => {
  return (
    <div className="mt-28 px-20">
      <h3 className="font-semibold text-[2.938rem] text-center">Our Partners</h3>
      <div className="flex items-center justify-center">
        <p className="font-medium text-center text-18 w-[30%] my-8">We are trusted and partnered with some of the world’s leading blockchain companies</p>
      </div>
      <div className="grid grid-cols-6 gap-3 rounded-md my-8  align-center justify-center">
        {OurPartnersData.map((partner) => (
          <div className="mx-4 relative mb-8" key={partner.id}>
            <Icon className="mx-auto" name={partner.icon} />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mb-8">
        <CustomButton customClass="my-12" handleClick={() => {}} size={ButtonProperties.SIZES.small} title="PARTNER WITH US" variant={ButtonProperties.VARIANT.primary.name} />
      </div>
    </div>
  );
};

export default OurPartners;
