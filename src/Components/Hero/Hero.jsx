import React, { use } from "react";
import FoodCarousel from "./FoodCarousel";
import { FaArrowRight } from "react-icons/fa";
import { ThemeContext } from "../../Contexts/ThemeContext";

const Hero = () => {
  // const theme = localStorage.getItem("theme") || "light";
  // console.log(theme);

  const { theme } = use(ThemeContext);

  return (
    <section className=" w-11/12  max-w-[1400px] mx-auto mt-10 font-inter">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-5 min-h-[500px]">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in flex-1">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold leading-sm font-space">
              Share Food, <br />
              <span className="text-primary"> Share Love</span>
            </h1>
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-slate-600"
              }  text-xl lg:text-2xl leading-sm max-w-xl`}>
              Connect with your community to reduce food waste and spread
              kindness. Every shared meal creates a bond, every saved dish makes
              a difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              size="lg"
              className="btn btn-primary p-6 text-lg font-semibold rounded-[8px] transition-all duration-300 flex items-center">
              Start Sharing
              <FaArrowRight className="size-5" />
            </button>
            <button
              variant="outline"
              size="lg"
              className="btn btn-outline btn-secondary p-6 text-lg font-semibold rounded-[8px] transition-all duration-300">
              Find Food Near Me
            </button>
          </div>
        </div>

        {/* Right Content - Food Carousel */}
        <div className="relative flex justify-center flex-1">
          <FoodCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
