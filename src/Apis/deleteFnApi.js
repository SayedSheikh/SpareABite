import axios from "axios";
import toast from "react-hot-toast";

export const deleteFn = async (id, email) => {
  try {
    const res = await axios.delete(
      `https://spare-a-bite-server.vercel.app/foodRequests/${id}?email=${email}`
    );
    return res.data;
  } catch (err) {
    toast.error("Error Occured");
    throw err;
  }
};
