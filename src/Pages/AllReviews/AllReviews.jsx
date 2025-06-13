import React, { useState } from "react";
import AllReviewCard from "./AllReviewCard";
import InfoModal from "../../Shared/infoModal";
import FullSingleReview from "./FullSingleReview";
import { useLoaderData } from "react-router";

const AllReviews = () => {
  const [card, setCard] = useState(null);

  const { data } = useLoaderData();

  const infoModalOpen = (card) => {
    setCard(card);
    document.getElementById("my_modal_2").showModal();
  };
  return (
    <div className="max-w-[1200px] mx-auto min-h-[calc(100vh-65px)] my-[30px] font-inter w-11/12">
      <title>SpareABite | Reviews</title>
      <div className="mx-auto px-4 text-center">
        <div className="flex items-center justify-center flex-col sm:flex-row">
          <h2 className="text-3xl font-bold text-primary mb-6">User Reviews</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 mb-[100px]">
        {data?.map((item) => (
          <AllReviewCard
            key={item._id}
            review={item}
            infoModalOpen={infoModalOpen}
          />
        ))}
      </div>

      <InfoModal>{card && <FullSingleReview card={card} />}</InfoModal>
    </div>
  );
};

export default AllReviews;
