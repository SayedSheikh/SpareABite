import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useSecureAxios from "../Hooks/useSecureAxios";

const EditForm = ({ food }) => {
  // const { user } = useAuth();

  const secureAxios = useSecureAxios();

  const queryClient = useQueryClient();

  const mutationFn = async ({ values }) => {
    // return axios
    //   .post(`http://localhost:3000/food/${food._id}`, { vlaues })
    //   .then((data) => data.data)
    //   .catch((err) => console.log(err));

    try {
      const result = await secureAxios.post(`/food/${food._id}`, values);
      return result.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  // const verifyEdit = (res) => {
  //   console.log(res);
  //   Swal.fire({
  //     title: "Deleted!",
  //     text: "Your Shared Food has been deleted.",
  //     icon: "success",
  //   });

  //   document.getElementById("my_modal_3").close();
  // };

  const mutation = useMutation({
    mutationFn: mutationFn,
    onSuccess: (res) => {
      document.getElementById("my_modal_3").close();
      queryClient.invalidateQueries({ queryKey: ["foodData"] }); // optional: refetch the todos
      if (res.modifiedCount) {
        Swal.fire({
          icon: "success",
          title: "Your modify has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "No Modification",
          text: "All the values remain same",
          icon: "warning",
        });
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const values = Object.fromEntries(formData.entries());
    // console.log(values);

    mutation.mutate({ values });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6  shadow-sm shadow-primary rounded-xl space-y-5 max-h-[500px] overflow-y-auto">
      <h2 className="text-3xl font-bold text-center text-primary">Meal Info</h2>
      {/* Food Name */}
      <div>
        <label className="label font-medium">Food Name</label>
        <input
          type="text"
          name="foodName"
          className="input input-bordered w-full"
          placeholder="Ex: Chicken Biryani"
          defaultValue={food?.foodName}
        />
      </div>

      {/* Food Image */}
      <div>
        <label className="label font-medium">Food Image URL</label>
        <input
          type="url"
          name="foodImageURL"
          className="input input-bordered w-full"
          placeholder="Ex: https://example.com/image.jpg"
          defaultValue={food?.foodImageURL}
        />
      </div>

      {/* Pickup Location */}
      <div>
        <label className="label font-medium">Pickup Location</label>
        <input
          type="text"
          name="pickupLocation"
          className="input input-bordered w-full"
          placeholder="Ex: Dhanmondi 32, Dhaka"
          defaultValue={food.pickupLocation}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        {/* Expired Date/Time */}
        <div className="flex-1">
          <label className="label font-medium">Expire Date</label>
          <input
            type="datetime-local"
            name="expiredAt"
            className="input input-bordered w-full"
            defaultValue={food.expiredAt}
          />
        </div>
        {/* Food Quantity */}
        <div className="flex-1">
          <label className="label font-medium">Food Quantity</label>
          <input
            type="number"
            name="quantity"
            className="input input-bordered w-full"
            placeholder="Ex: 5 plates"
            defaultValue={food.quantity}
          />
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <label className="label font-medium">Additional Notes</label>
        <textarea
          name="notes"
          className="textarea textarea-bordered w-full"
          placeholder="Optional notes (Ex: Slightly spicy, contains nuts, etc.)"
          defaultValue={food.notes}
        />
      </div>

      {/* Donor Image */}
      <div>
        <label className="label font-medium">Donor Image URL</label>
        <input
          type="url"
          name="donorImageURL"
          className="input input-bordered w-full"
          value={food?.donorImageURL}
          readOnly
        />
      </div>

      {/* Donor Name & Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="label font-medium">Donor Name</label>
          <input
            type="text"
            name="donorName"
            className="input input-bordered w-full"
            value={food?.donorName}
            readOnly
          />
        </div>
        <div>
          <label className="label font-medium">Donor Email</label>
          <input
            type="email"
            name="donorEmail"
            className="input input-bordered w-full"
            value={food?.donorEmail}
            readOnly
          />
        </div>
      </div>

      {/* Food Status */}
      <div>
        <label className="label font-medium">Food Status</label>
        <input
          type="text"
          name="status"
          className="input input-bordered w-full"
          value={food.status}
          readOnly
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-info w-full mt-2">
        Edit
      </button>
    </form>
  );
};

export default EditForm;
