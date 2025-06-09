import React, { use } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { format } from "date-fns";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";

// const food = {
//   foodName: "Vegetable Biryani",
//   foodImageURL: "https://i.ibb.co/LhvPV6qg/hero-image-1.jpg",
//   quantity: "3 Plates",
//   pickupLocation: "123 Main Street",
//   expiredAt: "2025-06-07 5:00 PM",
//   notes: "Please bring a container.",
//   donorImageURL:
//     "https://lh3.googleusercontent.com/a/ACg8ocL8zHgZYRF9XUyjxK8PfOBh1JI41Qu5kCwtuECTQoJyiI5LXw=s96-c",
//   donorName: "Md Sayed Sheikh",
//   donorEmail: "sayed@example.com",
//   status: "Available",
// };

const FoodCard = ({ food, myfood }) => {
  const { theme } = use(ThemeContext);

  const { expiredAt } = food;

  const date = new Date(expiredAt);

  const formattedDate = format(date, "dd-MM-yyyy p");

  const handleEdit = () => {
    console.log(`Editing food item: ${food.foodName}`);
  };

  const handleDelete = () => {
    console.log(`Deleting food item: ${food.foodName}`);
  };

  const handleView = () => {
    console.log(`Viewing food item: ${food.foodName}`);
  };

  return (
    <div className=" rounded-[10px] overflow-hidden  hover:shadow-primary shadow-sm transition-all duration-300 border border-info hover:scale-105 flex flex-col">
      {/* Image + Status Badge */}
      <div className="relative">
        <img
          src={food.foodImageURL}
          alt={food.foodName}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-[6px] shadow ${
            food.status === "Available"
              ? "bg-[#9bffb36f] text-white border  border-green-500"
              : "bg-[#ffb49ba0] text-white border  border-red-500"
          }`}>
          {food.status}
        </span>
      </div>

      {/* Food Info */}
      <div className="p-4 space-y-3 flex flex-col grow-1 justify-between">
        <h3
          className={`text-xl font-bold  ${
            theme === "light" ? "text-gray-800" : "text-gray-100"
          }`}>
          {food.foodName}
        </h3>

        <div className="space-y-1">
          <div
            className={`text-sm  ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}>
            <span>
              <strong>Quantity:</strong> {food.quantity}
            </span>
          </div>

          <div
            className={`text-sm ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}>
            <span>
              <strong>Expires:</strong> {formattedDate}
            </span>
          </div>

          <div
            className={`text-sm ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}>
            <span>
              <strong>Pickup:</strong> {food.pickupLocation}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-1 pt-2">
          {myfood ? (
            <>
              <Link to={`/food/${food._id}`} className="btn btn-info flex-1">
                <FaEye className="mx-auto" size={20} />
              </Link>
              <button
                onClick={handleEdit}
                className="flex-1 btn btn-neutral text-white py-2 px-4 rounded-sm transition-colors opacity-80">
                <BiSolidEditAlt className="mx-auto" size={25} />
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 btn btn-error text-white py-2 px-4 rounded-sm transition-colors">
                <MdDelete className="mx-auto" size={25} />
              </button>
            </>
          ) : (
            <Link to={`/food/${food._id}`} className="btn btn-info flex-1">
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
