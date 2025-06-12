import React from "react";
import { FaStar } from "react-icons/fa";

const FullSingleReview = ({ card }) => {
  const { comment, rating, userName, userImg } = card;

  return (
    <div className=" space-y-4 text-sm md:text-base ">
      {/* Image and Basic Info */}
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          src={userImg}
          alt="User Image"
          className="w-full md:w-40 h-40 object-cover rounded-xl"
        />
        <div className="flex flex-col gap-1 overflow-hidden overflow-y-auto max-h-[160px] space-y-2">
          <h2 className="text-xl font-semibold">{userName}</h2>
          <div className="flex gap-1 items-center flex-wrap">
            <p className="grow-0 text-[18px]">Rating :</p>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => {
                return (
                  <FaStar
                    key={i}
                    className={`${
                      i + 1 <= rating ? "text-orange-300" : "text-gray-200"
                    }`}
                  />
                );
              })}
            </div>
          </div>
          <p>
            <span className="font-semibold">Review:</span> {comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullSingleReview;
