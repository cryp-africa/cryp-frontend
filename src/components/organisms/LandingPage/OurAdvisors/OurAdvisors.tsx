import Image from "next/image";
import React, { useState } from "react";

import CustomLink from "@components/atoms/CustomLink";
import Icon from "@components/atoms/Icons";
import { OurAdvisorsData } from "@components/componentData/OurAdvisorsData/OurAdvisorsData";

const OurAdvisors = () => {
  const [active, setActive] = useState<number>(0);
  return (
    <div className="mt-28 px-20">
      <h3 className="font-semibold text-[2.938rem] text-center">Our Advisors</h3>
      <div className="flex items-center justify-center">
        <p className="font-medium text-center text-18 w-[40%] my-8">
          Our Advisors are a robust group of highly experienced and accomplished leaders in the blockchain system across the world
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3 rounded-md my-24  align-center justify-center cursor-pointer relative">
        {OurAdvisorsData.map((advisor) => (
          <div className="relative mb-16 mx-4 text-center" key={advisor.id} onMouseEnter={() => setActive(advisor.id)} onMouseLeave={() => setActive(0)}>
            <Image height={282} src={advisor.image} width={298} />
            <h4 className="text-16  mt-4 font-semibold">{advisor.name}</h4>
            <p className="text-14  mt-8 font-medium">{advisor.position}</p>
            {active === advisor.id && (
              <div
                className={`absolute top-[10%] ${active % 4 === 0 ? "right-[50%]" : "left-[50%]"}  z-10 bg-advisorBg p-5 w-[22.5rem] h-[21.375rem] transition ease-linear duration-500`}
              >
                <h4 className="text-20 flex font-semibold mb-8">{advisor.about.name}</h4>
                <p className="text-14 text-left font-medium">{advisor.about.title}</p>
                <p className="text-14 text-left leading-[1.438rem] font-medium mt-8 mb-[1.5rem] w-full">{advisor.about.body}</p>
                <CustomLink customClass="text-14 font-semibold text-crypYellow-200 flex items-center" destination="#">
                  Visit LinkedIn Page <Icon className="ml-3" name="yellowArrowRight" />
                </CustomLink>
              </div>
            )}
          </div>
        ))}
        <Icon className="ml- cursor-pointer absolute right-0 top-[47%] -translate-y-[50%]" name="proceed" />
      </div>
    </div>
  );
};

export default OurAdvisors;
