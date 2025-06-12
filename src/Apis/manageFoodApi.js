import axios from "axios";
import { AuthContext } from "../Contexts/AuthContext";

export const manageFoodApi = async (email) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/myManagedFoods?email=${email}`
    );

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
