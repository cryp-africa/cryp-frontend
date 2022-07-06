import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import CustomButton from "@components/atoms/CustomButton";
import CustomLink from "@components/atoms/CustomLink";
import Icon from "@components/atoms/Icons";
import { DesktopNav } from "@components/componentData/Navigation/DesktopNav";

import useClickOutside from "@hooks/useClickOutside";

import { ButtonProperties } from "@shared/libs/helpers";

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
      <div className={`flex justify-between py-8 px-6 items-center ${navBar || isOpen ? "bg-black" : ""}`}>
        <CustomLink customClass="cursor-pointer mt-4" destination="/">
          <Icon name="logo" />
        </CustomLink>
        {isOpen ? <AiOutlineClose className="cursor-pointer" onClick={() => setIsOpen(false)} /> : <GiHamburgerMenu className="cursor-pointer" onClick={() => setIsOpen(true)} />}
      </div>
      <ul className={`px-4 pb-5 bg-black ${isOpen ? "openNav" : "closeNav"}`} ref={node}>
        {DesktopNav.map((data) => (
          <li className="mx-2 mb-4 flex items-center " key={data.id}>
            <CustomLink customClass="capitalize text-16 font-semibold" destination={data.route}>
              {data.name}
            </CustomLink>
            {data.hasOptions && <Icon className="ml-4 cursor-pointer" name="dropDown" />}
          </li>
        ))}
        <li>
          <CustomButton customClass="h-16 px-5" handleClick={() => {}} size={ButtonProperties.SIZES.small} title="Get Started" variant={ButtonProperties.VARIANT.primary.name} />
        </li>
      </ul>
    </>
  );
};

export default MobileNavigation;
