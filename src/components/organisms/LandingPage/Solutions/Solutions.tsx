import React from "react";

import Icon from "@components/atoms/Icons";
import { SolutionsData } from "@components/componentData/Solutions/SolutionsData";

const Solutions = () => {
  return (
    <div className="my-32">
      <h1 className="text-center capitalize font-semibold text-[47px] mb-12 leading-[55px] ">our solutions for your business</h1>
      <div className="flex items-center justify-center w-full relative">
        {SolutionsData.map((solution) => (
          <div className="bg-slate-800 w-[576px] h-[572px] rounded-lg mx-12 p-12 relative" key={solution.id}>
            <div className="flex justify-between">
              <h5 className="uppercase text-16 font-semibold ">{solution.caption}</h5>
              {solution.icon && <Icon className="absolute right-0 top-0" name="rhombus" />}
            </div>
            <h2 className="text-[100px] font-bold text-center text-crypGreen-800 uppercase my-8">{solution.title}</h2>
            <p className="uppercase  text-center text-20 font-semibold ">{solution.subHeader}</p>
            <div className="flex items-center justify-center">
              <p className="text-16 text-center mt-12 mb-32 w-3/4 font-medium ">{solution.body}</p>
            </div>
            <p className="text-16 font-semibold text-crypYellow-200 flex items-center">
              Explore <Icon className="ml-4" name="yellowArrowRight" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
