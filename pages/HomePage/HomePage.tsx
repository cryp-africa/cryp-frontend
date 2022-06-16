import Building from "@components/Building/Building";
import PaymentGateway from "@components/PaymentGateway/PaymentGateway";
import ScrollDown from "@components/ScrollDown/ScrollDown";
import React from "react";

const HomePage = () => {
  return (
    <div className="px-4 smallLaptop:px-48">
      <Building />
      <div className="hidden desktop:block">
        <ScrollDown />
      </div>
      <PaymentGateway />
    </div>
  );
};

export default HomePage;
