import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router";

// const food = {
//   _id: "6845e3852b75576e03968568",
//   foodName: "Naan Ruti",
//   foodImageURL: "https://i.ibb.co/1G80GnrS/Naan-Roti.jpg",
//   quantity: 4,
//   pickupLocation: "Sector-11, road-21, Uttara Dhaka-1230",
//   expiredAt: "2025-07-30T06:44",
//   notes: "Please bring a bag.",
//   donorImageURL:
//     "https://lh3.googleusercontent.com/a/ACg8ocLg9WF4RtTMVcxfx6Xh75d0mgpvH_TLY9LIhj745bWyeQ3xhKwH=s96-c",
//   donorName: "Sayed Sheikh",
//   donorEmail: "sayedsheikh9@gmail.com",
//   status: "Available",
//   requested: null,
// };

const FeaturedCard = ({ food }) => {
  return (
    <div className="card card-side bg-base-200 shadow-sm shadow-primary h-[200px] group font-inter">
      <figure className="w-[40%]">
        <img
          className="object-cover w-full h-full group-hover:scale-110 transition-transform"
          src={food.foodImageURL}
          alt="Food"
        />
      </figure>
      <div className="card-body p-5 flex flex-col justify-between w-[60%]">
        <div className="shrink-0">
          <h2 className="card-title text-xl mb-3">{food.foodName}</h2>
          <p className="text-sm mb-1">Qty: {food.quantity}</p>
          <p className="text-sm flex items-start gap-1 shrink-0">
            <MdLocationOn className="w-5 h-5 shrink-0" />
            <span className="">{food.pickupLocation}</span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/food/${food._id}`} className="btn btn-info btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
