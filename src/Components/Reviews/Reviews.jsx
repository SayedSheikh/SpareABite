import React, { use, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { Link } from "react-router";
import InfoModal from "../../Shared/infoModal";
import GiveReview from "./GiveReview";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import Loading2 from "../Loading/Loading2";
import useAuth from "../../Hooks/useAuth";

// queryKey: ["foodData", user?.email], // user scoped
//     enabled: !!user?.email, // prevent early fetch when user is null
//     queryFn: () => manageFoodApi(user?.email),

const Reviews = () => {
  const { theme } = use(ThemeContext);

  const { user } = useAuth();

  const getReviews = async () => {
    try {
      const res = await axios.get("http://localhost:3000/reviews");

      return res.data;
    } catch (err) {
      toast.error("Error Occured");
      throw err;
    }
  };

  const { isPending, isError, data } = useQuery({
    queryKey: ["reviewsData"],
    queryFn: getReviews,
  });

  useEffect(() => {}, []);

  const handleOpenReview = () => {
    if (!user) {
      toast("📌 LogIn to add review !!");
      return;
    }
    document.getElementById("my_modal_2").showModal();
  };

  if (isPending) return <Loading2></Loading2>;
  if (isError)
    return (
      <p className="text-red-400 font-[20px] text-center">Try Again Later !!</p>
    );
  return (
    <section className="pb-16 bg-base-100 font-inter max-w-[1400px] mx-auto w-11/12">
      <div className="mx-auto px-4 text-center">
        <div className="flex items-center justify-between flex-col sm:flex-row">
          <h2 className="text-3xl font-bold text-primary mb-4">User Reviews</h2>
          <div onClick={handleOpenReview} className="btn btn-secondary">
            Give Review
          </div>
        </div>
      </div>

      <Marquee pauseOnHover className="h-[140px]">
        {data?.slice(0, data?.length / 2).map((item) => (
          <ReviewCard key={item._id} review={item} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="h-[140px]">
        {data?.slice(data?.length / 2, data?.length).map((item) => (
          <ReviewCard key={item._id} review={item} />
        ))}
      </Marquee>

      <Link
        to="/allReviews"
        className="relative inline-block px-4 py-2 font-medium group cursor-pointer my-5">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary/50 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-base-100 border-2 border-secondary group-hover:bg-secondary"></span>
        <span
          className={`relative  ${
            theme === "light"
              ? "group-hover:text-white text-black"
              : "group-hover:text-black text-white"
          }`}>
          View all Reviews
        </span>
      </Link>

      <InfoModal>
        <GiveReview></GiveReview>
      </InfoModal>
    </section>
  );
};

export default Reviews;
