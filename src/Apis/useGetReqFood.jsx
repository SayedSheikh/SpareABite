import React from "react";
import useSecureAxios from "../Hooks/useSecureAxios";
import toast from "react-hot-toast";

const useGetReqFood = () => {
  const secureAxios = useSecureAxios();

  const getReqFoods = async (email) => {
    try {
      const res = await secureAxios.get(`/foodRequests?email=${email}`);
      return res.data;
    } catch (err) {
      console.log(err);
      toast.error("error occured");
    }
  };
  return {
    getReqFoods,
  };
};

export default useGetReqFood;
