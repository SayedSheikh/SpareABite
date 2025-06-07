import React from "react";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Components/Loading/Loading";

const FoodShareForm = () => {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
  };

  if (!user) return <Loading />;

  return (
    <div className="font-inter my-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-6  shadow-sm shadow-primary rounded-xl space-y-5">
        <h2 className="text-3xl font-bold text-center text-primary">
          Share a Meal
        </h2>
        {/* Food Name */}
        <div>
          <label className="label font-medium">Food Name</label>
          <input
            type="text"
            name="foodName"
            className="input input-bordered w-full"
            placeholder="Ex: Chicken Biryani"
            required
          />
        </div>

        {/* Food Image */}
        <div>
          <label className="label font-medium">Food Image URL</label>
          <input
            type="url"
            name="foodImage"
            className="input input-bordered w-full"
            placeholder="Ex: https://example.com/image.jpg"
            required
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
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          {/* Expired Date/Time */}
          <div className="flex-1">
            <label className="label font-medium">Expire Date</label>
            <input
              type="datetime-local"
              name="expiredDateTime"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* Food Quantity */}
          <div className="flex-1">
            <label className="label font-medium">Food Quantity</label>
            <input
              type="number"
              name="foodQuantity"
              className="input input-bordered w-full"
              placeholder="Ex: 5 plates"
              required
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

        {/* Donor Image */}
        <div>
          <label className="label font-medium">Donor Image URL</label>
          <input
            type="url"
            name="donorImage"
            className="input input-bordered w-full"
            value={user?.photoURL}
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
              value={user?.displayName}
              readOnly
            />
          </div>
          <div>
            <label className="label font-medium">Donor Email</label>
            <input
              type="email"
              name="donorEmail"
              className="input input-bordered w-full"
              value={user?.email}
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
            value="Available"
            readOnly
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-info w-full mt-2">
          Share Food
        </button>
      </form>
    </div>
  );
};

export default FoodShareForm;
