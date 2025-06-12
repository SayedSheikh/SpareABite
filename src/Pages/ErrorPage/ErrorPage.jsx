import React from "react";
import loadingDarktLottie from "./../../Lotties/lightmode-404.json";
import Lottie from "lottie-react";
import { Link } from "react-router";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const ErrorPage = () => {
  return (
    <div className="bg-black h-screen text-white ">
      <title>SpareABite | 404</title>
      <div className="max-w-[1400px] mx-auto w-11/12">
        <Lottie
          className="max-w-[500px] mx-auto"
          animationData={loadingDarktLottie}
        />

        <div className="flex items-center gap-1 justify-center mt-10">
          <MdOutlineKeyboardBackspace size={20} />
          <Link to="/" className="text-lg md:text-2xl hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
