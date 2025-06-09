import React from "react";
import useAuth from "../Hooks/useAuth";
import { format } from "date-fns";

// const food = {
//   _id: 123444,
//   foodName: "Vegetable Biryani",
//   foodImageURL: "https://i.ibb.co/LhvPV6qg/hero-image-1.jpg",
//   quantity: "3 Plates",
//   pickupLocation: "123 Main Street",
//   expiredAt: "2025-06-08T03:44",
//   notes: "Please bring a container.",
//   donorImageURL:
//     "https://lh3.googleusercontent.com/a/ACg8ocL8zHgZYRF9XUyjxK8PfOBh1JI41Qu5kCwtuECTQoJyiI5LXw=s96-c",
//   donorName: "Md Sayed Sheikh",
//   donorEmail: "sayed@example.com",
//   status: "Available",
// };

const RequestConfirmation = ({ food }) => {
  const { user } = useAuth();
  const now = new Date();

  const dateTimeValue = format(now, "dd-MM-yyyy p");

  const formattedExpireDate = format(new Date(food.expiredAt), "dd-MM-yyyy p");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestFoodInfo = {
      foodId: e.target.foodId.value,
      userEmail: user?.email,
      DonorEmail: food.donorEmail,
      requestDate: e.target.requestDateTime.value,
      aditionalNote: e.target.additionalNotes.value,
    };
    console.log(requestFoodInfo);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl max-h-[500px] overflow-x-auto mx-auto space-y-5 font-inter">
      <h2 className="text-3xl font-bold text-center text-info">Confirmation</h2>
      {/* Food Name */}
      <div>
        <label className="label font-medium">Food Name</label>
        <input
          type="text"
          name="foodName"
          className="input input-bordered w-full"
          value={food?.foodName}
          readOnly
        />
      </div>

      {/* Food Image */}
      <div>
        <label className="label font-medium">Food Image URL</label>
        <input
          type="url"
          name="foodImage"
          className="input input-bordered w-full"
          value={food?.foodImageURL}
          readOnly
        />
      </div>
      {/* Food Id */}
      <div>
        <label className="label font-medium">Food ID</label>
        <input
          type="text"
          name="foodId"
          className="input input-bordered w-full"
          value={food?._id}
          readOnly
        />
      </div>

      {/* Pickup Location */}
      <div>
        <label className="label font-medium">Pickup Location</label>
        <input
          type="text"
          name="pickupLocation"
          className="input input-bordered w-full"
          value={food.pickupLocation}
          readOnly
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        {/* Request Date/Time */}
        <div className="flex-1">
          <label className="label font-medium">Request Date & Time</label>
          <input
            type="text"
            name="requestDateTime"
            className="input input-bordered w-full"
            value={dateTimeValue}
            readOnly
          />
        </div>
        {/* Expired Date/Time */}
        <div className="flex-1">
          <label className="label font-medium">Expire Date</label>
          <input
            type="text"
            name="expiredDateTime"
            className="input input-bordered w-full"
            value={formattedExpireDate}
            readOnly
          />
        </div>
      </div>

      {/* user email*/}
      <div>
        <label className="label font-medium">User Email</label>
        <input
          type="text"
          name="status"
          className="input input-bordered w-full"
          value={user?.email}
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
      {/* Additional Notes */}
      <div>
        <label className="label font-medium">Additional Notes</label>
        <textarea
          name="additionalNotes"
          className="textarea textarea-bordered w-full"
          placeholder="Optional notes (Ex: Slightly spicy, contains nuts, etc.)"
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-info w-full mt-2">
        Request
      </button>
    </form>
  );
};

export default RequestConfirmation;
