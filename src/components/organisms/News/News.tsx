import Image from "next/image";
import React from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import { NewsData } from "@components/componentData/NewsData/NewsData";

const News = () => {
  return (
    <div className="px-5 bigLaptop:px-20">
      {NewsData.map((news) => (
        <div className={`${news.id !== NewsData.length ? "mb-40" : "pb-20 bigLaptop:pb-40"}`} key={news.id}>
          <div className="hidden smallLaptop:text-14 smallLaptop:flex smallLaptop:items-center">
            <h5 className=" font-semibold mr-4">{news.heading}</h5>
            <h6 className="font-medium text-white opacity-70">{news.date}</h6>
          </div>
          <div className="flex items-center bigLaptop:items-center flex-col  smallLaptop:flex-row">
            <div className="block smallLaptop:hidden">
              <Image height={279} src={news.image} width={672} />
              <div className="text-14 flex my-8 items-center">
                <h5 className=" font-semibold mr-4">{news.heading}</h5>
                <h6 className="font-medium text-white opacity-60">{news.date}</h6>
              </div>
            </div>
            <div className="w-full smallLaptop:w-1/2">
              <h3 className="text-20 smallLaptop:text-37 font-semibold w-[80%] mb-8">{news.title}</h3>
              <p className="text-14 font-medium w-full smallLaptop:w-[80%] text-white opacity-70 mb-8">{news.body}</p>
              <CustomLink
                customClass="text-12 smallLaptop:text-16 hover:text-crypYellow-300 font-semibold text-crypYellow-200 flex items-center justify-end smallLaptop:justify-start"
                destination="#"
              >
                Read More <Icon className="ml-4 " name="yellowArrowRight" />
              </CustomLink>
            </div>
            <div className="hidden smallLaptop:block">
              <Image height={279} src={news.image} width={672} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
