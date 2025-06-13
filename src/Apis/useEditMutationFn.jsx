import React from "react";
import toast from "react-hot-toast";
import useSecureAxios from "../Hooks/useSecureAxios";

const useEditMutationFn = () => {
  const secureAxios = useSecureAxios();

  const editMutationFn = async (id, updatedInfo, email) => {
    try {
      const res = await secureAxios.patch(
        `/foodRequests/${id}?email=${email}`,
        updatedInfo
      );
      return res.data;
    } catch (err) {
      console.log(err);
      toast.error("Error Occcured");
      throw err;
    }
  };
  return {
    editMutationFn,
  };
};

export default useEditMutationFn;
