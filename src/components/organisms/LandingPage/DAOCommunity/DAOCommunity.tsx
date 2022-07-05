import Image from "next/image";
import React from "react";

import CustomButton from "@components/atoms/CustomButton";
import CustomLink from "@components/atoms/CustomLink";
import Icon from "@components/atoms/Icons";
import { DAOCommunityData } from "@components/componentData/DAOCommunityData/DAOCommunityData";

import { ButtonProperties, slideRight } from "@shared/libs/helpers";

const DaoCommunity = () => {
  return (
    <div>
      <h3 className="font-semibold text-[47px] text-center">DAO Community</h3>
      <div className="flex items-center justify-center">
        <p className="font-medium text-center text-18 w-[70%] my-8">
          Sustainable intelligentsia flexitarian prism cillum. Veniam elit vape, reprehenderit bushwick cupidatat tousled slow-carb taxidermy green juice keytar swag occupy cliche.
          Jean shorts vexillologist affogato truffaut, skateboard mollit est roof party tumeric. DIY esse tofu biodiesel try-hard. Ipsum veniam pabst brunch forage helvetica tumblr
          roof party gochujang taiyaki man braid palo santo VHS everyday carry mlkshk. Lo-fi franzen gluten-free migas four dollar toast,
        </p>
      </div>

      <div className="flex rounded-md overflow-x-scroll hide-scrollbar scroll-smooth flex-nowrap relative" id="dao">
        {DAOCommunityData.map((dao) => (
          <div className="mx-4 relative basis-auto shrink-0 grow-0" key={dao.id}>
            <Image height={369} src={dao.image_url} width={389} />
            <div className={`p-5 bottom-[5px] h-[40%] w-full absolute bg-${dao.bg} rounded-md`}>
              <h3 className="text-20 z-20 uppercase mt-4 font-semibold !opacity-100">{dao.title}</h3>
              <CustomLink customClass="text-16 z-20 absolute bottom-3 font-semibold text-crypYellow-200 flex items-center" destination="#">
                Read More <Icon className="ml-4" name="yellowArrowRight" />
              </CustomLink>
            </div>
          </div>
        ))}
        <Icon className="ml- cursor-pointer absolute top-0 right-0" name="proceed" onClick={() => slideRight("dao", 1500)} />
      </div>
      <div className="flex justify-center items-center mb-8">
        <CustomButton customClass="mt-12" handleClick={() => {}} size={ButtonProperties.SIZES.small} title="JOIN COMMUNITY" variant={ButtonProperties.VARIANT.primary.name} />
      </div>
    </div>
  );
};

export default DaoCommunity;
