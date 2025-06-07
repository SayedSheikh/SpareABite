import { createBrowserRouter } from "react-router";
import MainLayoute from "../Layouts/MainLayoute";
import Home from "../Pages/Home/Home";
import AddFood from "../Pages/AddFood/AddFood";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayoute,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addfood",
        Component: AddFood,
      },
      {
        path: "/availableFood",
        Component: AvailableFood,
      },
      {
        path: "/manageFood",
        Component: AddFood,
      },
      {
        path: "/foodRequest",
        Component: AddFood,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ],
  },
]);
