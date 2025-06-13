import { createBrowserRouter } from "react-router";
import MainLayoute from "../Layouts/MainLayoute";
import Home from "../Pages/Home/Home";
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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllReviews from "../Pages/AllReviews/AllReviews";
// import useFoodDetailsApi from "../Apis/useFoodDetailsApi";

// const axiosSecure = useSecureAxios();

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayoute,
    errorElement: <ErrorPage></ErrorPage>,
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
        // loader: ({ params }) => axiosSecure.get(`/food/${params.id}`),
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
        element: (
          <PrivateRoute>
            <MyFoodRequests />
          </PrivateRoute>
        ),
      },
      {
        path: "/allReviews",
        loader: () => axios.get("http://localhost:3000/reviews"),
        element: <AllReviews />,
        hydrateFallbackElement: <Loading2></Loading2>,
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
