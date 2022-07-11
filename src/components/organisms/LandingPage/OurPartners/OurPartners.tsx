import React from "react";

import CustomButton from "@components/atoms/CustomButton";
import Icon from "@components/atoms/Icons";
import { OurPartnersData } from "@components/componentData/OurPartnersData/OurPartnersData";

import { ButtonProperties } from "@shared/libs/helpers";

const OurPartners = () => {
  return (
    <div className="mt-16 smallLaptop:mt-28 bigLaptop:px-20">
      <h3 className="font-semibold text-20 smallLaptop:text-[2.938rem] mb-8 whitespace-nowrap text-center">Our Partners</h3>
      <div className="flex items-center justify-center">
        <p className="font-medium text-center text-white opacity-60 smallLaptop:opacity-70 text-18 w-[80%] bigLaptop:w-[30%] mt-2 mb-8 smallLaptop:my-8">
          We are trusted and partnered with some of the world’s leading blockchain companies
        </p>
      </div>
      <div className="grid grid-cols-5  smallLaptop:gap-3 rounded-md smallLaptop:my-8  align-center justify-center px-5 smallLaptop:pl-0">
        {OurPartnersData.slice(0, 10).map((partner) => (
          <div className="mx-4 relative smallLaptop:mb-8" key={partner.id}>
            <Icon className="mx-auto w-[3.125rem] tablet:w-[4.375rem] smallLaptop:w-[6.25rem]" name={partner.icon} />
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
