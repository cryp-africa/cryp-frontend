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
    <div className={`px-16 w-full py-16 bigLaptop:px-20 flex justify-between items-center scroll-bg ${navBar ? "bg-black" : ""}`}>
      <div className="flex justify-between w-[45%]">
        <CustomLink destination="/">
          <Icon name="logo" />
        </CustomLink>
        <ul className="flex items-center justify-between">
          {DesktopNav.map((data) => (
            <li className="mx-8 flex items-center " key={data.id}>
              <CustomLink customClass="capitalize text-16 font-semibold" destination={data.route}>
                {data.name}
              </CustomLink>
              {data.hasOptions && <Icon className="ml-4 cursor-pointer" name="dropDown" />}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <CustomLink customClass="uppercase text-16 font-bold text-crypYellow-200" destination="#">
          join waitlist
        </CustomLink>
        <Icon className="mx-4 cursor-pointer" name="nigeriaFlag" />
        <Icon className="cursor-pointer" name="dropDown" />
      </div>
    </div>
  );
};

export default DesktopNavigation;
