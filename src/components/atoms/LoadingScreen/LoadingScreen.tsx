import React, { FC } from "react";

interface LoadingScreenProps {
  loading: boolean;
}
const LoadingScreen: FC<LoadingScreenProps> = ({ loading }) => {
  return (
    <div className={`${loading ? "block z-[60] !fixed" : "hidden"} screen`}>
      <div className="balls">
        <div className="ball one" />
        <div className="ball two" />
        <div className="ball three" />
      </div>
    </div>
  );
};

export default LoadingScreen;
