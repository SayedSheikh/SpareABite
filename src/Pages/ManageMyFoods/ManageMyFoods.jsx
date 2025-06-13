import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import FoodCard from "../../Components/FoodCard/FoodCard";
import Skeleton from "../../Components/Skeleton/Skeleton";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Loading from "../../Components/Loading/Loading";

import { useQuery } from "@tanstack/react-query";
import RequestModal from "../../Shared/RequestModal";
import EditForm from "../../Shared/EditForm";
import InfoModal from "../../Shared/infoModal";
import InfoModalChildren from "../../Shared/infoModalChildren";
import useManageFoodApi from "../../Apis/useManageFoodApi";
// import { manageFoodApi } from "../../Apis/manageFoodApi";

const ManageMyFoods = () => {
  const { user, loading } = useAuth();
  const [selectedFood, setSelectedFood] = useState(null);
  // const [mySharedFoods, setMySharedFoods] = useState([]);
  // const [loading, setLoading] = useState(true);

  const { manageFoodApi } = useManageFoodApi();

  const [availableFood, setAvailableFood] = useState([]);
  const [requestedFood, setARequestedFood] = useState([]);

  // for modal

  const openModal = (newfood) => {
    setSelectedFood(newfood);
    document.getElementById("my_modal_3").showModal();
  };
  const openInfoModal = (newfood) => {
    setSelectedFood(newfood);
    document.getElementById("my_modal_2").showModal();
  };

  // const manageFoodApi = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://spare-a-bite-server.vercel.app/myManagedFoods?email=${user?.email}`
  //     );

  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //     throw err;
  //   }
  // };

  const {
    isPending,
    error,
    data: mySharedFoods,
  } = useQuery({
    queryKey: ["foodData", user?.email], // user scoped
    enabled: !!user?.email, // prevent early fetch when user is null
    queryFn: () => manageFoodApi(user?.email),
  });

  // console.log(data);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(`https://spare-a-bite-server.vercel.app/myManagedFoods?email=${user?.email}`)
  //     .then(({ data }) => {
  //       setMySharedFoods(data);

  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, [user]);

  useEffect(() => {
    // if (mySharedFoods?.length === 0) return;

    const requested = [];
    const available = [];

    mySharedFoods?.forEach((food) => {
      if (food.status === "Available") {
        available.push(food);
      } else if (food.status === "Requested") {
        requested.push(food);
      }
    });

    setAvailableFood(available);
    setARequestedFood(requested);
  }, [mySharedFoods]);

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log(error);
    return (
      <p className="text-xl text-red-400">
        Something gone wrong !! <br /> try again later !!
      </p>
    );
  }
  return (
    <div className="bg-base-200 min-h-screen py-[50px] font-inter">
      <title>SpareABite | MangageFoods</title>
      <div className="text-center w-11/12  max-w-[1400px] mx-auto text-primary">
        <h1 className="text-5xl font-bold">My Shared Foods</h1>
      </div>

      <div className="w-11/12 max-w-[1400px] mx-auto py-15">
        <h1 className="text-[30px] text-secondary mb-3 flex gap-2 items-center font-semibold flex-wrap">
          <div className="flex items-center">
            <LiaLongArrowAltRightSolid className="hidden sm:inline-block" />
            Shared Available Foods
          </div>
          <span className="text-info">({availableFood?.length} items)</span>
        </h1>

        {availableFood.length === 0 && !isPending && (
          <p className="text-[25px] w-full text-center bg-base-300 py-[20px] rounded-[8px] text-space">
            No Available Food
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5">
          {isPending
            ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)
            : availableFood?.map((item) => {
                return (
                  <FoodCard
                    key={item._id}
                    food={item}
                    myfood={true}
                    onOpenModal={openModal}
                    openInfoModal={openInfoModal}
                  />
                );
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
        <h1 className="text-[30px] text-secondary mb-3 flex gap-2 items-center font-semibold flex-wrap">
          <div className="flex items-center">
            <LiaLongArrowAltRightSolid className="hidden sm:inline-block" />
            Shared Requested Foods
          </div>
          <span className="text-info">({requestedFood?.length} items)</span>
        </h1>
        {requestedFood.length === 0 && !isPending && (
          <p className="text-[25px] w-full text-center bg-base-300 py-[20px] rounded-[8px] text-space">
            No Requested Food
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5">
          {isPending
            ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)
            : requestedFood?.map((item) => {
                return (
                  <FoodCard
                    key={item._id}
                    food={item}
                    myfood={true}
                    onOpenModal={openModal}
                    openInfoModal={openInfoModal}
                  />
                );
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

      <RequestModal>
        {selectedFood && (
          <EditForm key={selectedFood._id} food={selectedFood}></EditForm>
        )}
      </RequestModal>

      <InfoModal>
        {selectedFood && (
          <InfoModalChildren
            key={selectedFood._id}
            food={selectedFood}></InfoModalChildren>
        )}
      </InfoModal>
    </div>
  );
};

export default ManageMyFoods;
