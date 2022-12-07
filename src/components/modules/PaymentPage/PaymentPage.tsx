import React from "react";

import MobileFooter from "@components/layouts/MobileFooter/MobileFooter";
import AcceptPayments from "@components/organisms/PaymentPage/AcceptPayments/AcceptPayments";
import ConnectAndTrade from "@components/organisms/PaymentPage/ConnectAndTrade/ConnectAndTrade";
import GetComfortable from "@components/organisms/PaymentPage/GetComfortable/GetComfortable";
import PaymentBuilding from "@components/organisms/PaymentPage/PaymentBuilding/PaymentBuilding";
import TradeAndAccept from "@components/organisms/PaymentPage/TradeAndAccept/TradeAndAccept";

interface PaymentPageProps {
  theme: string;
  staticFiles: any;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ theme, staticFiles }) => {
  return (
    <div className="bg-crypGray-50 text-black">
      <div className="max-w-[90rem] mx-auto">
        <PaymentBuilding />
        <AcceptPayments />
        <ConnectAndTrade />
        <TradeAndAccept staticFiles={staticFiles} />
        <GetComfortable staticFiles={staticFiles} />
      </div>
      <MobileFooter theme={theme} />
    </div>
  );
};

export default PaymentPage;
