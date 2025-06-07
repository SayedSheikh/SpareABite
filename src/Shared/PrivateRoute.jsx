import React from "react";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading/Loading";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const { pathname } = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to={"/login"} state={pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
