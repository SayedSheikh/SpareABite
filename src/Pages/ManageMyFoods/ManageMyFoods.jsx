import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import FoodCard from "../../Components/FoodCard/FoodCard";
import Skeleton from "../../Components/Skeleton/Skeleton";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Loading from "../../Components/Loading/Loading";

const ManageMyFoods = () => {
  const { user } = useAuth();
  const [mySharedFoods, setMySharedFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const [availableFood, setAvailableFood] = useState([]);
  const [requestedFood, setARequestedFood] = useState([]);
  const [deliveredFood, setDeliveredFood] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/myManagedFoods?email=${user?.email}`)
      .then(({ data }) => {
        setMySharedFoods(data);

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [user]);

  useEffect(() => {
    setLoading(true);
    if (mySharedFoods.length === 0) return;

    const requested = [];
    const available = [];
    const delivered = [];
    mySharedFoods.forEach((food) => {
      if (food.status === "Available") {
        available.push(food);
      } else if (food.status === "Requested") {
        requested.push(food);
      } else if (food.status === "Delivered") {
        delivered.push(food);
      }
    });

    setAvailableFood(available);
    setARequestedFood(requested);
    setDeliveredFood(delivered);

    setLoading(false);
  }, [mySharedFoods]);

  if (mySharedFoods.length === 0) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-base-200 min-h-screen py-[50px] font-inter">
      <div className="text-center w-11/12  max-w-[1400px] mx-auto text-primary">
        <h1 className="text-5xl font-bold">My Shared Foods</h1>
      </div>

      <div className="w-11/12 max-w-[1400px] mx-auto py-15">
        <h1 className="text-[30px] text-secondary mb-3 flex gap-2 items-center font-semibold">
          <LiaLongArrowAltRightSolid />
          Shared Available Foods
          <span className="text-info">({availableFood.length} items)</span>
        </h1>

        {availableFood.length === 0 && (
          <p className="text-[25px] w-full text-center bg-base-300 py-[20px] rounded-[8px] text-space">
            No Available Food
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)
            : availableFood.map((item) => {
                return <FoodCard key={item._id} food={item} myfood={true} />;
              })}

          {/* {data.length === 0 && noValue && (
          <p className="sm:col-span-2 md:col-span-3 lg:col-span-4">
            No food available with name{" "}
            <span className="text-primary font-normal text-[18px]">
              {noValue}
            </span>
          </p>
        )} */}
        </div>
      </div>
      <div className="w-11/12 max-w-[1400px] mx-auto py-15">
        <h1 className="text-[30px] text-secondary mb-3 flex gap-2 items-center font-semibold">
          <LiaLongArrowAltRightSolid />
          Shared Requested Foods
          <span className="text-info">({requestedFood.length} items)</span>
        </h1>
        {requestedFood.length === 0 && (
          <p className="text-[25px] w-full text-center bg-base-300 py-[20px] rounded-[8px] text-space">
            No Requested Food
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)
            : requestedFood.map((item) => {
                return <FoodCard key={item._id} food={item} myfood={true} />;
              })}

          {/* {data.length === 0 && noValue && (
          <p className="sm:col-span-2 md:col-span-3 lg:col-span-4">
            No food available with name{" "}
            <span className="text-primary font-normal text-[18px]">
              {noValue}
            </span>
          </p>
        )} */}
        </div>
      </div>
      <div className="w-11/12 max-w-[1400px] mx-auto py-15">
        <h1 className="text-[30px] text-secondary mb-3 flex gap-2 items-center font-semibold">
          <LiaLongArrowAltRightSolid />
          Shared Delivered Foods
          <span className="text-info">({deliveredFood.length} items)</span>
        </h1>

        {deliveredFood.length === 0 && (
          <p className="text-[25px] w-full text-center bg-base-300 py-[20px] rounded-[8px] text-space">
            No Delivered Food
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)
            : deliveredFood.map((item) => {
                return <FoodCard key={item._id} food={item} myfood={true} />;
              })}

          {/* {data.length === 0 && noValue && (
          <p className="sm:col-span-2 md:col-span-3 lg:col-span-4">
            No food available with name{" "}
            <span className="text-primary font-normal text-[18px]">
              {noValue}
            </span>
          </p>
        )} */}
        </div>
      </div>
    </div>
  );
};

export default ManageMyFoods;
