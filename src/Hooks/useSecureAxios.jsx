import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";

const secureAxios = axios.create({
  baseURL: "https://spare-a-bite-server.vercel.app",
});

const useSecureAxios = () => {
  const { token, logout } = useAuth();

  // console.log(user?.email);

  useEffect(() => {
    const requestInterceptor = secureAxios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${token}`;

        return config;
      }
    );

    const responseInterseptor = secureAxios.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          logout()
            .then()
            .catch((err) => console.log(err));
        }

        console.log(error);
        return Promise.reject(error);
      }
    );

    return () => {
      secureAxios.interceptors.request.eject(requestInterceptor);
      secureAxios.interceptors.response.eject(responseInterseptor);
    };
  }, [token, logout]);

  // secureAxios.interceptors.request.use((config) => {
  //   config.headers.authorization = `Bearer ${token}`;

  //   return config;
  // });
  return secureAxios;
};

export default useSecureAxios;
