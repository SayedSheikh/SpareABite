import React, { use } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { format } from "date-fns";

const ViewDetails = ({ food }) => {
  const { theme } = use(ThemeContext);

  const {
    foodInfo: {
      foodImageURL,
      foodName,
      quantity,
      expiredAt,
      donorName,
      pickupLocation,
      notes,
      donorImageURL,
      donorEmail,
      status,
    },
    userEmail,
    requestDate,
    reqAditionalNote,
  } = food;

  return (
    <div className=" space-y-4 text-sm md:text-base">
      {/* Image and Basic Info */}
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={foodImageURL}
          alt={foodName}
          className="w-full md:w-40 h-40 object-cover rounded-xl"
        />
        <div className="flex flex-col justify-between">
          <h2 className="text-xl font-semibold">{foodName}</h2>
          <p>
            <span className="font-semibold">Quantity:</span> {quantity}
          </p>
          <p>
            <span className="font-semibold">Pickup:</span> {pickupLocation}
          </p>
          <p>
            <span className="font-semibold">Expires:</span>{" "}
            {format(expiredAt, "dd-MM-yyyy p")}
          </p>
        </div>
      </div>

      {/* Donor Info */}
      <div className="flex items-center gap-3">
        <img
          src={donorImageURL}
          alt={donorName}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">{donorName}</p>
          <p className="text-xs text-gray-500">{donorEmail}</p>
        </div>
      </div>

      {/* Status and Notes */}
      <div className="space-y-1">
        <p>
          Status:{" "}
          <span
            className={`font-semibold ${
              status === "Available" ? "text-green-400" : "text-orange-400"
            }`}>
            {status}
          </span>
        </p>
        {notes && (
          <p>
            <span className="font-semibold">Doner Notes:</span> {notes}
          </p>
        )}
      </div>

      {/* Request Info (if exists) */}

      <div
        className={`mt-4  rounded-lg p-3 ${
          theme === "light" ? "bg-gray-100" : "bg-gray-800"
        }`}>
        <h3
          className={`font-semibold mb-2 ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}>
          Request Info
        </h3>
        <p>
          <span className="font-semibold">Requested By:</span> {userEmail}
        </p>
        <p>
          <span className="font-semibold">Requested At:</span>{" "}
          {/* {new Date(requestDate).toLocaleString("en-US")} */}
          {format(requestDate, "dd-MM-yyyy p")}
        </p>
        {reqAditionalNote && (
          <p>
            <span className="font-semibold">Note:</span> {reqAditionalNote}
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewDetails;
