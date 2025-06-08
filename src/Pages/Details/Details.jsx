import React from "react";
import RequestModal from "../../Shared/RequestModal";
import RequestConfirmation from "../../Shared/RequestConfirmation";

const food = {
  _id: 123444,
  foodName: "Vegetable Biryani",
  foodImageURL: "https://i.ibb.co/LhvPV6qg/hero-image-1.jpg",
  quantity: "3 Plates",
  pickupLocation: "123 Main Street",
  expiredAt: "2025-06-08T03:44",
  notes: "Please bring a container.",
  donorImageURL:
    "https://lh3.googleusercontent.com/a/ACg8ocL8zHgZYRF9XUyjxK8PfOBh1JI41Qu5kCwtuECTQoJyiI5LXw=s96-c",
  donorName: "Md Sayed Sheikh",
  donorEmail: "sayedsheikh100@example.com",
  status: "Available",
};

const Details = () => {
  const handleRequest = () => {
    // alert("Request sent for this food item.");
    // You can replace this with real request logic
    document.getElementById("my_modal_3").showModal();
  };
  const dateTime = new Date(food.expiredAt);

  console.log(dateTime);

  return (
    <div className="max-w-4xl mx-auto my-8 p-5 px-4 w-11/12 rounded-xl shadow-sm shadow-primary">
      {/* Food Image */}
      <img
        src={food.foodImageURL}
        alt={food.foodName}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      {/* Food Info */}
      <h2 className="text-3xl font-bold mb-2">{food.foodName}</h2>
      <p className="text-base text-green-400  mb-1 w-fit">{food.status}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p>
            <span className="font-semibold">Quantity:</span> {food.quantity}
          </p>
          <p>
            <span className="font-semibold">Pickup Location:</span>{" "}
            {food.pickupLocation}
          </p>
          <p>
            <span className="font-semibold">Expires At:</span> {food.expiredAt}
          </p>
          <p>
            <span className="font-semibold">Notes:</span> {food.notes}
          </p>
        </div>

        {/* Donor Info */}
        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <img
            src={food.donorImageURL}
            alt={food.donorName}
            className="size-14 rounded-full border"
          />
          <div>
            <p className="font-semibold">{food.donorName}</p>
            <p className="text-sm text-gray-600">{food.donorEmail}</p>
          </div>
        </div>
      </div>
      {/* Request Button */}
      <div className="mt-6">
        <button
          onClick={handleRequest}
          className="btn btn-info w-full sm:w-auto">
          Request This Food
        </button>
      </div>
      <RequestModal handleRequest={handleRequest}>
        <RequestConfirmation food={food} />
      </RequestModal>
    </div>
  );
};

export default Details;
