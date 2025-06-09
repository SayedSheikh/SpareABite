import React from "react";

import { ScaleLoader } from "react-spinners";

const Loading2 = () => {
  return (
    <div className="flex justify-center lg:text-left h-screen w-full">
      <ScaleLoader className="mt-[100px]" />
    </div>
  );
};

export default Loading2;
