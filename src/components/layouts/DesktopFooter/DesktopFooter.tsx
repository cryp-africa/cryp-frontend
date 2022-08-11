import React from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import { Company } from "@components/componentData/Footer/Company";
import { Contact } from "@components/componentData/Footer/Contact";
import { Developers } from "@components/componentData/Footer/Developers";
import { Policy } from "@components/componentData/Footer/Policy";
import { Products } from "@components/componentData/Footer/Products";
import { Resources } from "@components/componentData/Footer/Resources";
import { Socials } from "@components/componentData/Footer/Socials";
import FooterOptions from "@components/FooterOptions.tsx/DesktopFooterOptions";

import { Themes } from "@shared/libs/helpers";

interface DesktopFooterProps {
  theme?: string;
}
const DesktopFooter = ({ theme }: DesktopFooterProps) => {
  return (
    <div>
      <div className={`${theme === Themes.DARK ? "bg-[#3D4156]" : "bg-[#F0FCFB]"} relative flex items-baseline justify-between py-16 px-16 bigLaptop:px-20`}>
        {theme === Themes.DARK && <div className="bg-glass-100 absolute top-0 left-0 backdrop-blur-[100px] h-full w-full" />}
        <FooterOptions options={Products} theme={theme} title="Products" />
        <FooterOptions options={Resources} theme={theme} title="Resources" />
        <FooterOptions options={Developers} theme={theme} title="Developers" />
        <FooterOptions options={Company} theme={theme} title="Company" />
        <FooterOptions options={Contact} theme={theme} title="Contact" />
      </div>
      <div className={`${theme === Themes.DARK ? "bg-[#636476]" : "bg-[#F6F6F6]"}   p-10 text-14 font-medium relative h-[164px]`}>
        <div className="bg-glass-500  absolute top-0 left-0 backdrop-blur-[150px] h-full w-full" />
        <div className={`flex justify-center items-center pb-16 ${theme === Themes.DARK ? "text-white" : "text-black"} opacity-95`}>
          <div className="absolute top-[28%] left-20 smallLaptop:left-16 bigLaptop:left-20 flex items-center ">
            <h5 className="mr-4">Nigeria</h5>
            <Icon className="mr-4 cursor-pointer" name="nigeriaFlag" />
            <Icon className="cursor-pointer" name="dropDown" />
          </div>
          <div className="absolute bottom-[20%] left-20 smallLaptop:left-16 bigLaptop:left-20 flex items-center ">
            <Icon className="mr-4 cursor-pointer" name={`${theme === Themes.DARK ? "copywright" : "copywrightLight"}`} />
            <h5 className="">Cryp</h5>
          </div>
          {Socials.map((socials) => (
            <div className="mr-4" key={socials.id}>
              <a className="cursor-pointer hover:text-crypGreen-500" href={socials.route} rel="noreferrer" target="_blank">
                {socials.name}
              </a>
              {/* <CustomLink destination={socials.route} redirect={true}>
                {socials.name}
              </CustomLink> */}
            </div>
          ))}
        </div>
        <div className={`flex justify-center -mt-[1.25rem] bigLaptop:justify-center items-center ${theme === Themes.DARK ? "text-white" : "text-black"} opacity-95`}>
          {Policy.map((policy) => (
            <div className="mr-4 flex items-center" key={policy.id}>
              <CustomLink destination={policy.route}>{policy.name}</CustomLink>
              {policy.id !== Policy.length && <div className={`rounded-full w-[0.313rem] h-[0.313rem] ml-4 ${theme === Themes.DARK ? "bg-crypGreen-500" : "bg-crypGreen-800"}`} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;

DesktopFooter.defaultProps = {
  theme: Themes.DARK,
};
