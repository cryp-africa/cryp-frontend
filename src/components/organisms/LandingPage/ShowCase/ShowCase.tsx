import React from "react";

const ShowCase = ({ staticFiles }: any) => {
  return (
    <div className="mb-16 smallLaptop:mb-40">
      <div className=" -ml-[50vw] left-[50%] relative w-screen">
        <img className="" src={staticFiles.showCaseContent} />
      </div>
    </div>
  );
};

export default ShowCase;
