import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

// {
//     userName: "sayed Sheikh",
//     userImg:
//       "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
//     rating: 4,
//     comment:
//       "Click the button to watch on Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app.",
//   },

const GiveReview = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(3);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const comment = e.target.comment.value;

    // console.log(rating);

    const info = {
      userName: user?.displayName,
      userImg: user?.photoURL,
      rating: rating,
      comment,
    };

    const res = await axios.post("http://localhost:3000/reviews", info);
    if (res.data.insertedId) {
      document.getElementById("my_modal_2").close();
      Swal.fire({
        icon: "success",
        title: "Your review has been saved",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };
  return (
    <div className="font-inter">
      <form onSubmit={handleSubmit} className="space-y-1">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img className="w-full" src={user?.photoURL} />
          </div>
        </div>
        <div>
          <p className="text-base">
            Username: <span>{user?.displayName}</span>
          </p>
        </div>

        <div className="flex items-center gap-1">
          <p>Stars: </p>
          <div className="rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <input
                key={i}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked={i + 1 === rating}
                aria-label="star"
                onChange={() => setRating(i + 1)}
              />
            ))}
          </div>
        </div>

        <div className="my-2">
          <textarea
            required
            name="comment"
            placeholder="Give your experience"
            className="textarea textarea-info w-full"></textarea>
        </div>

        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GiveReview;
