import { createBrowserRouter } from "react-router";
import MainLayoute from "../Layouts/MainLayoute";
import Home from "../Pages/Home/Home";
import AddFood from "../Pages/AddFood/AddFood";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";
import FoodShareForm from "../Pages/FoodShareForm/FoodShareForm";
import PrivateRoute from "../Shared/PrivateRoute";
import Details from "../Pages/Details/Details";
import axios from "axios";
import Loading2 from "../Components/Loading/Loading2";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequests from "../Pages/MyFoodRequests/MyFoodRequests";

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
        element: (
          <PrivateRoute>
            <FoodShareForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/availableFood",
        Component: AvailableFood,
      },

      {
        path: "/food/:id",
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/food/${params.id}`),
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading2></Loading2>,
      },
      {
        path: "/manageFood",
        element: (
          <PrivateRoute>
            <ManageMyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/foodRequest",
        Component: MyFoodRequests,
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
