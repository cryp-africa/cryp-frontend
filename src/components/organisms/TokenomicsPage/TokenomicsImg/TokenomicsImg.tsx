import Image from "next/image";
import React from "react";

import TokenomicsImgg from "@images/tokenomics/tokenomics.png";

const TokenomicsImg = () => {
  return (
    <div className="pt-32 pb-16">
      <Image height={507} src={TokenomicsImgg} width={1080} />
    </div>
  );
};

export default TokenomicsImg;
