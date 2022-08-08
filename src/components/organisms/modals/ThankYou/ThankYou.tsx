import { Dialog } from "@headlessui/react";
import React from "react";

import Icon from "@components/atoms/Icons";

const ThankYouData = [
  {
    id: 1,
    name: "discord",
    route: "#",
  },
  {
    id: 2,
    name: "telegram",
    route: "https://t.me/CrypAfrica",
  },
  {
    id: 3,
    name: "whatsapp",
    route: "#",
  },
];

interface ThankYouProps {
  setThankYou: Function;
}

const ThankYou = ({ setThankYou }: ThankYouProps) => {
  return (
    <div className="flex flex-col justify-center rounded-2xl items-center bg-waitList bg-no-repeat bg-cover bg-center relative">
      <Icon className="absolute right-6 top-4 cursor-pointer" name="cancel" onClick={() => setThankYou(false)} />
      <Dialog.Title as="h4" className="mb-4 capitalize text-[2.313rem] whitespace-nowrap font-semibold mt-8">
        Thank You!
      </Dialog.Title>
      <p className="capitalize my-8 tablet:my-16 text-14 w-[80%] text-center font-medium">
        Want to stay up to date with us? Follow our social media community pages with the links below
      </p>
      <div className="flex p-16">
        {ThankYouData.map((data) => (
          <a href={data.route} key={data.id} rel="noreferrer" target="_blank">
            <Icon className="w-[2.449rem] h-[2.449rem] tablet:w-[4.009rem] tablet:h-[4.009rem] mx-4" name={data.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ThankYou;
