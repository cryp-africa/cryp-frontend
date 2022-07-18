import React, { useEffect, useState } from "react";

import CustomLink from "@components/atoms/CustomLink";
import Icon from "@components/atoms/Icons";
import { DesktopNav } from "@components/componentData/Navigation/DesktopNav";

import useClickOutside from "@hooks/useClickOutside";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const node = useClickOutside(() => {
    setIsOpen(false);
  });

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
    <>
      <div className={`flex justify-between py-4 px-10 tablet:px-14 items-center ${navBar || isOpen ? "bg-black" : ""}`}>
        <CustomLink customClass="cursor-pointer mt-4" destination="/">
          <Icon className="w-[4.125rem] h-[1.75rem]" name="logo" />
        </CustomLink>
        {isOpen ? (
          <Icon className="cursor-pointer" name="cancel" onClick={() => setIsOpen(false)} />
        ) : (
          <Icon className="cursor-pointer" name="hamburger" onClick={() => setIsOpen(true)} />
        )}
      </div>
      <ul className={`px-8 tablet:px-12 pb-5 bg-black ${isOpen ? "openNav" : "closeNav"}`} ref={node}>
        {DesktopNav.map((data) => (
          <li className="mx-2 mb-8 flex items-center " key={data.id}>
            <CustomLink customClass="capitalize text-16 font-semibold" destination={data.route}>
              {data.name}
            </CustomLink>
            {data.hasOptions && <Icon className="ml-4 cursor-pointer" name="dropDown" />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileNavigation;
