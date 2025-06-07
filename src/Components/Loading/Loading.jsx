import React, { use } from "react";
import Lottie from "lottie-react";
import loadingLightLottie from "./../../../src/Lotties/default-loading.json";
import loadingDarktLottie from "./../../../src/Lotties/custom-1.json";
import { ThemeContext } from "../../Contexts/ThemeContext";

const Loading = () => {
  const { theme } = use(ThemeContext);

  return (
    <div className="text-center lg:text-left h-screen w-full">
      {theme === "light" ? (
        <Lottie
          className="max-w-[300px] mx-auto"
          animationData={loadingLightLottie}
        />
      ) : (
        <Lottie
          className="max-w-[300px] mx-auto"
          animationData={loadingDarktLottie}
        />
      )}
    </div>
  );
};

export default Loading;
