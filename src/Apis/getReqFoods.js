import axios from "axios";
import toast from "react-hot-toast";

export const getReqFoods = async (email) => {
  try {
    const res = await axios.get(
      `https://spare-a-bite-server.vercel.app/foodRequests?email=${email}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
    toast.error("error occured");
  }
};
