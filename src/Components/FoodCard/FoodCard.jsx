import React from "react";
import { Link } from "react-router";

const food = {
  foodName: "Vegetable Biryani",
  foodImageURL: "https://i.ibb.co/LhvPV6qg/hero-image-1.jpg",
  quantity: "3 Plates",
  pickupLocation: "123 Main Street",
  expiredAt: "2025-06-07 5:00 PM",
  notes: "Please bring a container.",
  donorImageURL:
    "https://lh3.googleusercontent.com/a/ACg8ocL8zHgZYRF9XUyjxK8PfOBh1JI41Qu5kCwtuECTQoJyiI5LXw=s96-c",
  donorName: "Md Sayed Sheikh",
  donorEmail: "sayed@example.com",
  status: "Available",
};

const FoodCard = () => {
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
    <div className=" bg-white rounded-[10px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-info">
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
      <div className="p-4 space-y-3">
        <h3 className="text-xl font-bold text-gray-800">{food.foodName}</h3>

        <div className="space-y-1">
          <div className="text-sm text-gray-600">
            <span>
              <strong>Quantity:</strong> {food.quantity}
            </span>
          </div>

          <div className="text-sm text-gray-600">
            <span>
              <strong>Expires:</strong> {food.expiredAt}
            </span>
          </div>

          <div className="text-sm text-gray-600">
            <span>
              <strong>Pickup:</strong> {food.pickupLocation}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          {/* <button
            onClick={handleView}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
            View
          </button> */}
          {/* <button
            href="#_"
            class="px-5 text-center w-full py-2.5 relative rounded group text-white font-medium inline-block cursor-pointer">
            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0  from-purple-600 to-blue-500"></span>
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span class="relative">Button Text</span>
          </button> */}

          <Link to={`/food/1234`} className="btn btn-info w-full">
            View Details
          </Link>

          {/* <button
            href="#_"
            class="w-full px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm shadow-sm active:shadow-none transition-all">
            Button Text
          </button> */}

          {/* <button
            onClick={handleEdit}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors">
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors">
            Delete
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
