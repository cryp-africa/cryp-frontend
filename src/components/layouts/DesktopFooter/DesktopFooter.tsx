import React from "react";

import CustomLink from "@components/atoms/CustomLink";
import Icon from "@components/atoms/Icons";
import { Company } from "@components/componentData/Footer/Company";
import { Contact } from "@components/componentData/Footer/Contact";
import { Developers } from "@components/componentData/Footer/Developers";
import { Policy } from "@components/componentData/Footer/Policy";
import { Products } from "@components/componentData/Footer/Products";
import { Resources } from "@components/componentData/Footer/Resources";
import { Socials } from "@components/componentData/Footer/Socials";
import FooterOptions from "@components/FooterOptions.tsx/FooterOptions";

const DesktopFooter = () => {
  return (
    <div>
      <div className="bg-[#3D4156] flex items-baseline justify-between py-16 px-16 bigLaptop:px-20">
        <FooterOptions options={Products} title="Products" />
        <FooterOptions options={Resources} title="Resources" />
        <FooterOptions options={Developers} title="Developers" />
        <FooterOptions options={Company} title="Company" />
        <FooterOptions options={Contact} title="Contact" />
      </div>
      <div className="bg-[#636476] p-10 text-14 font-medium relative h-[164px]">
        <div className="flex justify-center items-center pb-16">
          <div className="absolute top-[28%] left-20 smallLaptop:left-16 bigLaptop:left-20 flex items-center ">
            <h5 className="mr-4">Nigeria</h5>
            <Icon className="mr-4 cursor-pointer" name="nigeriaFlag" />
            <Icon className="cursor-pointer" name="dropDown" />
          </div>
          <div className="absolute bottom-[20%] left-20 smallLaptop:left-16 bigLaptop:left-20 flex items-center ">
            <Icon className="mr-4 cursor-pointer" name="copywright" />
            <h5 className="">Cryp</h5>
          </div>
          {Socials.map((socials) => (
            <div className="mr-4" key={socials.id}>
              <CustomLink destination={socials.route}>{socials.name}</CustomLink>
            </div>
          ))}
        </div>
        <div className="flex justify-center -mt-[1.25rem] bigLaptop:justify-center items-center">
          {Policy.map((policy) => (
            <div className="mr-4 flex items-center" key={policy.id}>
              <CustomLink destination={policy.route}>{policy.name}</CustomLink>
              {policy.id !== Policy.length && <div className="rounded-full w-[0.313rem] h-[0.313rem] ml-4 bg-crypGreen-500" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
