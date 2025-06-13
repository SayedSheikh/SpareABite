import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Loading2 from "../../Components/Loading/Loading2";
import RequestModal from "../../Shared/RequestModal";

import ViewDetails from "../../Shared/ViewDetails";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import Swal from "sweetalert2";
import InfoModal from "../../Shared/infoModal";
// import { getReqFoods } from "../../Apis/getReqFoods";
// import { deleteFn } from "../../Apis/deleteFnApi";
// import { editMutationFn } from "../../Apis/editMutationFn";
import useGetReqFood from "../../Apis/useGetReqFood";
import useEditMutationFn from "../../Apis/useEditMutationFn";
import useDeleteFnApi from "../../Apis/useDeleteFnApi";

const MyFoodRequests = () => {
  const { getReqFoods } = useGetReqFood();
  const { editMutationFn } = useEditMutationFn();
  const { deleteFn } = useDeleteFnApi();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const [selectedFood, setSelectedFood] = useState(null);

  const onDetailsModalOpen = (food) => {
    setSelectedFood(food);
    document.getElementById("my_modal_3").showModal();
  };

  // mutation with tan stack query
  // delete mutation
  const mutation = useMutation({
    mutationFn: (id) => deleteFn(id, user?.email),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reqFoodData"] });
      Swal.fire({
        title: "Deleted!",
        text: "Your request has been removed.",
        showConfirmButton: false,
        timer: 1000,
        icon: "success",
      });
    },
  });

  // call mutation

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(id);
      }
    });
  };

  // fetch data with tanstack query
  const {
    isPending,
    error,
    data: myRequestedFoods,
  } = useQuery({
    queryKey: ["reqFoodData", user?.email], // user scoped
    enabled: !!user?.email, // prevent early fetch when user is null
    queryFn: () => getReqFoods(user?.email),
  });

  // Handle Edit btn

  const handleEditModalOpen = (food) => {
    setSelectedFood(food);
    document.getElementById("my_modal_2").showModal();
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    const value = e.target.reqAditionalNote.value;
    const updatedInfo = {
      reqAditionalNote: value,
    };
    // console.log(updatedInfo);
    editNoteMutation.mutate({ id, updatedInfo });
  };

  const editNoteMutation = useMutation({
    mutationFn: ({ id, updatedInfo }) =>
      editMutationFn(id, updatedInfo, user?.email),
    onSuccess: (res) => {
      document.getElementById("my_modal_2").close();
      if (res.modifiedCount) {
        queryClient.invalidateQueries({ queryKey: ["reqFoodData"] });
        Swal.fire({
          title: "Updated!",
          text: "Your note has been updated !!",
          showConfirmButton: false,
          timer: 1000,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "No Change!",
          text: "Your note remain unchanged!!",
          showConfirmButton: true,
          icon: "warning",
        });
      }
    },
    onError: () => {
      document.getElementById("my_modal_2").close();
    },
  });

  if (isPending) {
    return <Loading2></Loading2>;
  }
  if (error) {
    return <p className="text-red-500 text-5 text-center">Error Occured</p>;
  }
  return (
    <div className="bg-base-200 min-h-screen">
      <title>SpareABite | MyFoodRequests</title>
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-center text-3xl font-bold font-inter py-5 text-primary">
          My Requested Foods
        </h1>

        <div className="max-w-[700px] mx-auto w-11/12">
          {myRequestedFoods?.length === 0 ? (
            <h1 className="py-5 px-3 bg-base-300 rounded-[8px] text-xl md:text-2xl text-center mt-10">
              You haven't made any food requests.
            </h1>
          ) : (
            <div className="overflow-x-auto">
              <table className="table min-w-[700px]">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Donor Name</th>
                    <th>Details</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}

                  {myRequestedFoods.map((item, index) => (
                    <tr key={item._id} className="">
                      <th>{index + 1}</th>
                      <td className="avatar p-2">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.foodInfo.foodImageURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </td>
                      <td>{item.foodInfo.foodName}</td>
                      <td>{item.foodInfo.donorName}</td>
                      <td>
                        <a
                          onClick={() => onDetailsModalOpen(item)}
                          className="link link-info">
                          View Details
                        </a>
                      </td>
                      <td className="space-x-1">
                        <button
                          onClick={() => handleEditModalOpen(item)}
                          className="btn btn-outline btn-neutral btn-sm p-1">
                          <MdModeEdit size={22} />
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-outline btn-error p-1 btn-sm">
                          <MdDeleteForever size={25} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <RequestModal>
        {selectedFood && (
          <ViewDetails key={selectedFood._id} food={selectedFood}></ViewDetails>
        )}
      </RequestModal>

      <InfoModal>
        {selectedFood && (
          <div key={selectedFood._id}>
            <h1>Edit Additional Notes for your request</h1>
            {/* <input
              type="text"
              placeholder="Info"
              className="input input-info"
              defaultValue={selectedFood.reqAditionalNote}
              name="reqAditionalNote"
            /> */}

            <form onSubmit={(e) => handleSubmit(e, selectedFood._id)}>
              <textarea
                name="reqAditionalNote"
                rows={4}
                placeholder="Give any aditional note"
                defaultValue={selectedFood.reqAditionalNote}
                className="border w-full py-3 px-3 rounded-[4px]"></textarea>

              <button type="submit" className="btn btn-info">
                Edit
              </button>
            </form>
          </div>
        )}
      </InfoModal>
    </div>
  );
};

export default MyFoodRequests;
