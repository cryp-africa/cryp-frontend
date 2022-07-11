import React, { useEffect, useState } from "react";

import CustomLink from "@components/atoms/CustomLink";
import Icon from "@components/atoms/Icons";
import { DesktopNav } from "@components/componentData/Navigation/DesktopNav";

const DesktopNavigation = () => {
  const [navBar, setNavBar] = useState<boolean>(false);

  const changeBackGround = () => {
    if (window.scrollY > 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", changeBackGround);
    }
  });

  return (
    <div className={`px-16 w-full py-[2.5rem] bigLaptop:px-20 flex justify-between items-center scroll-bg ${navBar ? "bg-black" : ""}`}>
      <div className="flex items-center justify-between w-[45%]">
        <CustomLink destination="/">
          <Icon className="w-[5.125rem] h-[2.75rem]" name="logo" />
        </CustomLink>
        <ul className="flex items-center justify-between ml-[2.125rem]">
          {DesktopNav.map((data) => (
            <li className="mx-8 flex items-center " key={data.id}>
              <CustomLink customClass="capitalize text-14 smallLaptop:text-16 bigLaptop:text-18 font-semibold" destination={data.route}>
                {data.name}
              </CustomLink>
              {data.hasOptions && <Icon className="ml-4 cursor-pointer" name="dropDown" />}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <CustomLink customClass="uppercase text-14 smallLaptop:text-16 bigLaptop:text-18 font-bold text-crypYellow-200 hover:text-crypYellow-300" destination="#">
          join waitlist
        </CustomLink>
        <Icon className="ml-12 mr-4 cursor-pointer" name="nigeriaFlag" />
        <Icon className="cursor-pointer" name="dropDown" />
      </div>
    </div>
  );
};

export default DesktopNavigation;
