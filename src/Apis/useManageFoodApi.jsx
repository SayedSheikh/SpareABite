import React from "react";
import useSecureAxios from "../Hooks/useSecureAxios";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";

const useManageFoodApi = () => {
  const secureAxios = useSecureAxios();

  const { token } = useAuth();
  //   useEffect(()=>{
  // secureAxios.get(`/myManagedFoods?email=${email}`)
  //   },[token])

  const manageFoodApi = async (email) => {
    try {
      if (token) {
        const res = await secureAxios.get(`/myManagedFoods?email=${email}`);
        return res.data;
      }
      return [];
    } catch (err) {
      toast.error("Error Occured");
      throw err;
    }
  };
  return { manageFoodApi };
};

export default useManageFoodApi;
