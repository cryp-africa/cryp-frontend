import Image from "next/image";
import React, { useState } from "react";

import CustomLink from "@components/atoms/CustomLink";
import Icon from "@components/atoms/Icons";
import { OurAdvisorsData } from "@components/componentData/OurAdvisorsData/OurAdvisorsData";

const OurAdvisors = () => {
  const [active, setActive] = useState<number>(0);
  return (
    <div className="smallLaptop:mt-28 bigLaptop:px-20">
      <h3 className="font-semibold text-20 tablet:text-[2.938rem] mb-2  smallLaptop:mb-8 text-center">Our Advisors</h3>
      <div className="flex items-center justify-center">
        <p className="font-medium text-center text-white opacity-60 smallLaptop:opacity-70 text-18 w-[80%] bigLaptop:w-[50%] my-8">
          Our Advisors are a robust group of highly experienced and accomplished leaders in the blockchain system across the world
        </p>
      </div>
      <div className="grid grid-cols-2 smallLaptop:grid-cols-4 gap-3 my-12 smallLaptop:my-24  align-center justify-center cursor-pointer relative">
        {OurAdvisorsData.map((advisor) => (
          <div className="relative mb-16 mx-4 text-center" key={advisor.id} onMouseEnter={() => setActive(advisor.id)} onMouseLeave={() => setActive(0)}>
            <Image height={282} src={advisor.image} width={298} />
            <h4 className="text-14 smallLaptop:text-16 text-left smallLaptop:text-center  mt-4 font-semibold">{advisor.name}</h4>
            <p className="text-12 smallLaptop:text-14 text-left smallLaptop:text-center mb-8 smallLaptop:mb-0  mt-4 smallLaptop:mt-8 font-medium">{advisor.position}</p>
            <div className="block absolute bottom-0 smallLaptop:hidden">
              <CustomLink customClass="text-12 smallLaptop:text-16 z-20 whitespace-nowrap font-semibold text-crypYellow-200 flex items-center" destination="#">
                Get to know {advisor.lastName} <Icon className="ml-2 smallLaptop:ml-4" name="yellowArrowRight" />
              </CustomLink>
            </div>
            {active === advisor.id && (
              <div
                className={`hidden smallLaptop:block smallLaptop:absolute top-[10%] rounded-[0.625rem] ${
                  active % 4 === 0 ? "right-[50%]" : "left-[50%]"
                }  z-10 bg-advisorBg p-5 w-[22.5rem] h-[22.375rem]`}
              >
                <h4 className="text-20 flex font-semibold mb-4">{advisor.about.name}</h4>
                <p className="text-14 text-left font-medium">{advisor.about.title}</p>
                <p className="text-14 text-left leading-[1.438rem] font-medium mt-8 mb-[1.5rem] w-full">{advisor.about.body}</p>
                <CustomLink customClass="text-14 font-semibold text-crypYellow-200 flex items-center" destination="#">
                  Visit LinkedIn Page <Icon className="ml-3" name="yellowArrowRight" />
                </CustomLink>
              </div>
            )}
          </div>
        ))}
        <Icon className="ml- cursor-pointer absolute right-0 bottom-0 mt-12 mr-8 smallLaptop:mt-0 smallLaptop:mr-0 smallLaptop:top-[47%] -translate-y-[50%]" name="proceed" />
      </div>
    </div>
  );
};

export default OurAdvisors;
