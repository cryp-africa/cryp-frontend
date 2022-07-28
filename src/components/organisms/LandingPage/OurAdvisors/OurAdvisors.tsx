import Image from "next/image";
import React, { useState } from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import { OurAdvisorsData } from "@components/componentData/OurAdvisorsData/OurAdvisorsData";

const OurAdvisors = () => {
  const [active, setActive] = useState<number>(0);

  const handleHover = (id: number) => {
    setActive(id);
  };

  const handleExit = () => {
    setActive(0);
  };

  return (
    <div className="smallLaptop:mt-28 bigLaptop:px-20">
      <h3 className="font-semibold text-20 tablet:text-[2.938rem] mb-2  smallLaptop:mb-8 text-center">Our Advisors</h3>
      <div className="flex items-center justify-center">
        <p className="font-medium text-center text-white opacity-60 smallLaptop:opacity-70 text-18 w-[80%] bigLaptop:w-[50%] my-8">
          Our Advisors are a robust group of highly experienced and accomplished leaders in the blockchain system across the world
        </p>
      </div>
      <div className="grid grid-cols-2 border border-l-0 border-r-0 border-t-0 pb-5 border-b-[#114443] smallLaptop:grid-cols-4 gap-3 smallLaptop:mt-24  align-center justify-center cursor-pointer relative">
        {OurAdvisorsData.map((advisor) => (
          <div className="relative mb-16 mx-4 text-center" id="about" key={advisor.id} onMouseEnter={() => handleHover(advisor.id)} onMouseLeave={() => handleExit()}>
            <Image height={282} src={advisor.image} width={298} />
            <h4 className="text-14 smallLaptop:text-16 text-left smallLaptop:text-center  mt-4 font-semibold">{advisor.name}</h4>
            <p className="text-12 smallLaptop:text-14 text-left smallLaptop:text-center mb-8 smallLaptop:mb-0  mt-4 smallLaptop:mt-8 font-medium">{advisor.position}</p>
            <div className="block absolute bottom-0 smallLaptop:hidden">
              <CustomLink customClass="text-12 smallLaptop:text-16 z-20 whitespace-nowrap font-semibold text-crypYellow-200 flex items-center" destination="#">
                Get to know {advisor.lastName} <Icon className="ml-2 smallLaptop:ml-4" name="yellowArrowRight" />
              </CustomLink>
            </div>
            <div
              className={` hidden ${
                active === advisor.id ? "showAbout" : "hideAbout"
              } smallLaptop:block relative smallLaptop:absolute top-0 bottom-0 right-0 left-0  z-10 !rounded-none p-2 bigLaptop:p-5 h-[320px]  bigLaptop:h-[310px] television:h-[300px]`}
            >
              <div className="bg-glass-100 -z-[1] absolute top-0 left-0 rounded-[10px] backdrop-blur-[100px] h-full w-full" />
              <h4 className="text-20 flex font-semibold mb-4">{advisor.about.name}</h4>
              <p className="text-14 text-left font-medium">{advisor.about.title}</p>
              <p className="text-14 text-left leading-[1.438rem] font-medium mt-8 mb-[1.5rem] w-full">{advisor.about.body}</p>
              <CustomLink customClass="text-14 font-semibold text-crypYellow-200 flex items-center" destination="#">
                Visit LinkedIn Page <Icon className="ml-3" name="yellowArrowRight" />
              </CustomLink>
            </div>
          </div>
        ))}
        <Icon className="ml- cursor-pointer absolute right-0 bottom-0 mt-12 mr-8 smallLaptop:mt-0 smallLaptop:mr-0 smallLaptop:top-[47%] -translate-y-[50%]" name="proceed" />
      </div>
    </div>
  );
};

export default OurAdvisors;
