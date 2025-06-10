import React, { use } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { format } from "date-fns";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

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

const FoodCard = ({ food, myfood, onOpenModal, openInfoModal }) => {
  const { theme } = use(ThemeContext);
  const queryClient = useQueryClient();

  const { expiredAt } = food;

  const date = new Date(expiredAt);

  const formattedDate = format(date, "dd-MM-yyyy p");

  // const deleteFn = () => {
  //   return axios
  //     .delete(`http://localhost:3000/food/${food._id}`)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  const deleteFn = async () => {
    try {
      const result = await axios.delete(
        `http://localhost:3000/food/${food._id}`
      );
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const mutation = useMutation({
    mutationFn: deleteFn, //The function that performs the API request
    onSuccess: () => {
      // console.log(res);
      //This runs after the mutation succeeds
      queryClient.invalidateQueries({ queryKey: ["foodData"] }); // optional: refetch the todos
      Swal.fire({
        title: "Deleted!",
        text: "Your Shared Food has been deleted.",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
    },
  });

  const handleEdit = () => {
    onOpenModal(food);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(); // Mutation Triggered
      }
    });
  };

  const handleView = () => {
    openInfoModal(food);
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
              <button onClick={handleView} className="btn btn-info flex-1">
                <FaEye className="mx-auto" size={20} />
              </button>
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
