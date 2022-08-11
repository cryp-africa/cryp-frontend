import React from "react";

import Icon from "@components/atoms/Icons";
import { EcoSystemData } from "@components/componentData/TokenomicsV1Data/EcoSystemData";
import { RiskManagementData } from "@components/componentData/TokenomicsV1Data/RiskManagementData";
import { UtilityData } from "@components/componentData/TokenomicsV1Data/UtilityData";

const TokenomicsV1 = () => {
  return (
    <div className="text-black text-base font-medium pb-20">
      <h2 className="text-37 font-bold text-center mb-20 mt-8">Cryp Version 1.0</h2>
      <div className="w-[90%]">
        <p className="font-bold mb-8">The Cryp ecosystem would be made up of 3 class of tokens, namely:</p>
        <ul>
          {EcoSystemData.map((eco) => (
            <li className="mb-8" key={eco.id}>
              <Icon className="mr-4 inline" name="ellipse" />
              <span>
                <span className="font-bold mr-2">{eco.title}</span>
                <span className="text-14 font-normal">{eco.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[90%]">
        <h2 className="font-bold mb-4 mt-8">Tokenomics of Cryp$ (CPUSD)</h2>
        <p className="text-14 font-normal mb-6 ml-12">
          <span className="font-bold mr-2 text-base">Cryp$ (CPUSD):</span> A proxy stable coin to BUSD CPUSD is created when dollars are deposited in the CRYP collections escrow
          account (either via merchant settlements/remittance or by direct purchase) and in cases of non-settlement cpUSD purchases,. BUSD is purchased to collaterize the issued
          cpUSD, thereby creating an equivalent supply of cpUSD that is introduced in circulation.
        </p>
        <p className="font-bold mb-4">Total Supply: Unlimited (no hard cap)</p>
        <p className="font-bold mb-4">Inflationary/Deflationary: Inflationary</p>
        <p className="font-bold mb-4">Price: 1 USD (BUSD)</p>
        <p className="font-bold mb-4">Collateral: All issued cpUSD is 100% collateralized by equivalent BUSD at every time.</p>
      </div>
      <div className="w-[90%]">
        <h2 className="font-bold mb-6 mt-8">Utility:</h2>
        <ul>
          {UtilityData.map((eco) => (
            <li className="mb-8" key={eco.id}>
              <Icon className="mr-4 inline" name="ellipse" />
              <span>{eco.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[90%]">
        <h2 className="font-bold mb-6 mt-8">Risk Management:</h2>
        <ul>
          {RiskManagementData.map((eco) => (
            <li className="mb-8" key={eco.id}>
              <Icon className="mr-4 inline" name="ellipse" />
              <span>{eco.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TokenomicsV1;
