import axios from "axios";
import toast from "react-hot-toast";

export const editMutationFn = async (id, updatedInfo, email) => {
  try {
    const res = await axios.patch(
      `http://localhost:3000/foodRequests/${id}?email=${email}`,
      updatedInfo
    );
    return res.data;
  } catch (err) {
    console.log(err);
    toast.error("Error Occcured");
    throw err;
  }
};
