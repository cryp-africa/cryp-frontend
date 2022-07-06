import React from "react";

import CustomLink from "@components/atoms/CustomLink";
import Icon from "@components/atoms/Icons";
import { SolutionsData } from "@components/componentData/SolutionsData/SolutionsData";

const Solutions = () => {
  return (
    <div className="mb-32">
      <h1 className="text-center capitalize font-semibold text-20 tablet:text-[47px] mb-12 leading-[55px] ">our solutions for your business</h1>
      <div className="flex tablet:items-center flex-col tablet:flex-row justify-center w-full relative">
        {SolutionsData.map((solution) => (
          <div className="bg-slate-800 w-full min-h-[285px] h-auto  tablet:w-[576px] tablet:h-[572px] rounded-lg mx-8 mb-8 tablet:mb-0 p-6 tablet:p-12 relative" key={solution.id}>
            <div className="flex justify-between">
              <h5 className="uppercase text-16 font-semibold ">{solution.caption}</h5>
              {solution.icon && (
                <div className="hidden tablet:block">
                  <Icon className="absolute right-0 top-0" name="rhombus" />{" "}
                </div>
              )}
              {solution.icon && (
                <div className="block tablet:hidden">
                  <Icon className="absolute right-5 top-10" name="mobileRhombus" />{" "}
                </div>
              )}
            </div>
            <h2 className="text-37 tablet:text-[100px] font-bold text-right tablet:text-center text-crypGreen-800 uppercase mt-16 mb-40">{solution.title}</h2>
            <p className="uppercase text-left tablet:text-center text-20 font-semibold ">{solution.subHeader}</p>
            <div className="flex items-center tablet:justify-center">
              <p className="text-16 text-left tablet:text-center mt-12 mb-32 w-full tablet:w-3/4 font-medium ">{solution.body}</p>
            </div>
            <CustomLink customClass="text-16 font-semibold text-crypYellow-200 absolute bottom-5 left-5 flex items-center" destination="#">
              Explore <Icon className="ml-4" name="yellowArrowRight" />
            </CustomLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
