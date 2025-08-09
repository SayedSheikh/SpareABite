import React from "react";
import { FaStar } from "react-icons/fa";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { Link } from "react-router";

const ReviewCard = ({ review }) => {
  const { rating, comment, userName } = review;
  return (
    <div
      className={`duration-300 transform bg-base-100 border-l-4 border-primary  hover:-translate-y-2 mx-3 max-w-[280px]`}>
      <div className="h-full p-5 border border-primary/20 border-l-0 rounded-r shadow-sm">
        <h6 className="mb-2 font-semibold leading-5">{userName}</h6>
        <div className="flex gap-1 items-center">
          <p>
            <strong>Rating :</strong>
          </p>
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
        <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis ">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
