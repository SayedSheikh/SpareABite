import React, { use } from "react";
import FeaturedCard from "./FeaturedCard";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "./../Skeleton/Skeleton";
import { Link } from "react-router";

const FeaturedSection = () => {
  // function that load data

  const featuredFn = async () => {
    try {
      const res = await axios.get(
        "https://spare-a-bite-server.vercel.app/featuredFoods"
      );

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { isPending, isError, data } = useQuery({
    queryKey: ["featuredFoods"],
    queryFn: featuredFn,
  });

  const { theme } = use(ThemeContext);

  if (isError) {
    return <p className="text-lg text-red-400 text-center">Error Occured</p>;
  }
  return (
    <div className="max-w-[1400px] mx-auto w-11/12 mb-20">
      <h1 className="text-center text-3xl md:text-4xl font-semibold font-inter text-primary my-10">
        Featured Shared Foods
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isPending
          ? Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i}></Skeleton>
            ))
          : data.map((item) => (
              <FeaturedCard key={item._id} food={item}></FeaturedCard>
            ))}
      </div>

      <Link
        to="/availableFood"
        className="relative inline-block px-4 py-2 font-medium group cursor-pointer my-10">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary/50 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-base-100 border-2 border-secondary group-hover:bg-secondary"></span>
        <span
          className={`relative  ${
            theme === "light"
              ? "group-hover:text-white text-black"
              : "group-hover:text-black text-white"
          }`}>
          View More Foods
        </span>
      </Link>
    </div>
  );
};

export default FeaturedSection;
