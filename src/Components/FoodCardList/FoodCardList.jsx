import React, { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { format } from "date-fns";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useSecureAxios from "../../Hooks/useSecureAxios";

const FoodCardList = ({ food, myfood, onOpenModal, openInfoModal }) => {
  const { theme } = useContext(ThemeContext);

  const queryClient = useQueryClient();
  const secureAxios = useSecureAxios();

  const { expiredAt } = food;
  const date = new Date(expiredAt);
  const formattedDate = format(date, "dd-MM-yyyy p");

  const deleteFn = async () => {
    try {
      const result = await secureAxios.delete(`/food/${food._id}`);
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const mutation = useMutation({
    mutationFn: deleteFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foodData"] });
      Swal.fire({
        title: "Deleted!",
        text: "Your Shared Food has been deleted.",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
    },
  });

  const handleEdit = () => onOpenModal(food);
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
        mutation.mutate();
      }
    });
  };
  const handleView = () => openInfoModal(food);

  return (
    <div className="flex flex-col md:flex-row bg-base-100 rounded-lg overflow-hidden border border-info shadow-sm hover:shadow-primary hover:scale-[1.01] transition-all duration-300">
      {/* Image + Status */}
      <div className="relative md:w-2/5 w-full">
        <img
          src={food.foodImageURL}
          alt={food.foodName}
          className="w-full h-full object-cover"
        />
        <span
          className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-[6px] shadow border ${
            food.status === "Available"
              ? "bg-green-100 text-green-700 border-green-500"
              : "bg-red-100 text-red-700 border-red-500"
          }`}>
          {food.status}
        </span>
      </div>

      {/* Info + Actions */}
      <div className="flex flex-col justify-between p-4 md:w-3/5">
        <div className="space-y-1">
          <h3
            className={`text-xl font-bold ${
              theme === "light" ? "text-gray-800" : "text-gray-100"
            }`}>
            {food.foodName}
          </h3>

          <p
            className={`text-sm ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}>
            <strong>Quantity:</strong> {food.quantity}
          </p>

          <p
            className={`text-sm ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}>
            <strong>Expires:</strong> {formattedDate}
          </p>

          <p
            className={`text-sm ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}>
            <strong>Pickup:</strong> {food.pickupLocation}
          </p>
        </div>

        <div className="flex gap-2 pt-3">
          {myfood ? (
            <>
              <button onClick={handleView} className="btn btn-info flex-1">
                <FaEye className="mx-auto" size={20} />
              </button>
              <button
                onClick={handleEdit}
                className="btn btn-neutral flex-1 text-white">
                <BiSolidEditAlt className="mx-auto" size={25} />
              </button>
              <button
                onClick={handleDelete}
                className="btn btn-error flex-1 text-white">
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

export default FoodCardList;
