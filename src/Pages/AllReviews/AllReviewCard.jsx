import React from "react";
import { FaStar } from "react-icons/fa";

const AllReviewCard = ({ review, infoModalOpen }) => {
  const { userName, userImg, rating, comment } = review;
  const openModal = () => {
    infoModalOpen(review);
  };
  return (
    <div className="card card-side bg-base-100 shadow-sm border border-primary/20 font-space">
      <figure className="p-5 rounded-xl w-[40%]">
        <img
          src={userImg}
          alt="Movie"
          className="rounded-xl w-full max-h-[200px]"
        />
      </figure>
      <div className="card-body w-[60%] pl-0">
        <h2 className="card-title text-xl">{userName}</h2>
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
        <p className="text-[17px] line-clamp-2 overflow-hidden text-ellipsis max-h-[50px]">
          {comment}
        </p>
        <span
          onClick={openModal}
          className="text-[16px] underline text-blue-400 cursor-pointer">
          View full
        </span>
      </div>
    </div>
  );
};

export default AllReviewCard;
