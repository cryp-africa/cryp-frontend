import React from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import { SolutionsData } from "@components/componentData/SolutionsData/SolutionsData";

const Solutions = () => {
  return (
    <div className="mb-4 smallLaptop:mb-16 tablet:ml-0">
      <h1 className="text-center capitalize font-semibold text-20 tablet:text-24 smallLaptop:text-[2.938rem] mb-8 smallLaptop:mb-24 leading-[3.438rem] ">
        our solutions for your business
      </h1>
      {/* <div className="border border-l-0 border-r-0 border-t-0 pb-5 border-b-[#114443] flex tablet:items-center flex-col smallLaptop:flex-row justify-center w-full relative ]"> */}
      <div className="pb-5 flex tablet:items-center flex-col smallLaptop:flex-row justify-center w-full relative ">
        {SolutionsData.map((solution) => (
          <div
            className="b-slate-800 rounded-[0.938rem] min-h-[16.563rem] w-[85%] h-auto tablet:h-[39rem] tablet:w-[80%] smallLaptop:w-[28rem] bigLaptop:w-[36rem] smallLaptop:h-[41.375rem] mx-8 mb-8 bigLaptop:mb-0 p-6 bigLaptop:p-12 relative"
            key={solution.id}
          >
            <div className="bg-glass-200 rounded-[15px] absolute top-0 left-0 backdrop-blur-[50px] h-full w-full" />
            <div className="flex justify-between">
              <div className="flex items-center">
                <h5 className="uppercase text-12 smallLaptop:text-16 font-semibold text-white opacity-70">{solution.caption1}</h5>
              </div>
            </div>
            <h2 className="text-[1.563rem] tablet:text-[1.875rem] whitespace-nowrap  font-bold text-center tablet:text-center text-crypGreen-800 opacity-95 uppercase mt-8 tablet:mt-16  tablet:mb-4 smallLaptop:mb-20 desktop:mb-8">
              {solution.title}
            </h2>
            <div className="flex items-center tablet:justify-center">
              <p className="text-12 smallLaptop:text-16 text-white text-center opacity-95 tablet:text-center mt-12 mb-12 tablet:mb-12 w-full tablet:w-3/4 font-medium ">
                {solution.body}
              </p>
            </div>
            <ul className="text-white opacity-70">
              {solution.features.map((feature, index) => (
                <li className="mb-[24px]" key={index}>
                  <Icon className="mr-4 inline" name="ellipse" />
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
            <CustomLink
              customClass="text-12 hover:text-crypYellow-300 smallLaptop:text-16 font-semibold text-crypYellow-200 absolute bottom-4 right-5 tablet:left-10 flex items-center"
              destination="#"
            >
              Explore <Icon className="ml-4" name="yellowArrowRight" />
            </CustomLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
