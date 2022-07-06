import React from "react";

import { Company } from "@components/componentData/Footer/Company";
import { Contact } from "@components/componentData/Footer/Contact";
import { Developers } from "@components/componentData/Footer/Developers";
import { Products } from "@components/componentData/Footer/Products";
import { Resources } from "@components/componentData/Footer/Resources";
import FooterOptions from "@components/FooterOptions.tsx/FooterOptions";

const DesktopFooter = () => {
  return (
    <div className="bg-[#3D4156] flex items-baseline justify-between p-20">
      <FooterOptions options={Products} title="Products" />
      <FooterOptions options={Resources} title="Resources" />
      <FooterOptions options={Developers} title="Developers" />
      <FooterOptions options={Company} title="Company" />
      <FooterOptions options={Contact} title="Contact" />
    </div>
  );
};

export default DesktopFooter;
