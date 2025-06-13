import React from "react";
import toast from "react-hot-toast";
import useSecureAxios from "../Hooks/useSecureAxios";

const useDeleteFnApi = () => {
  const secureAxios = useSecureAxios();

  const deleteFn = async (id, email) => {
    try {
      const res = await secureAxios.delete(
        `/foodRequests/${id}?email=${email}`
      );
      return res.data;
    } catch (err) {
      toast.error("Error Occured");
      throw err;
    }
  };
  return {
    deleteFn,
  };
};

export default useDeleteFnApi;
