import { createBrowserRouter } from "react-router";
import MainLayoute from "../Layouts/MainLayoute";
import Home from "../Pages/Home/Home";
import AddFood from "../Pages/AddFood/AddFood";

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
        Component: AddFood,
      },
      {
        path: "/manageFood",
        Component: AddFood,
      },
      {
        path: "/foodRequest",
        Component: AddFood,
      },
    ],
  },
]);
