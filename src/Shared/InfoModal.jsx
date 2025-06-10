import React from "react";

const InfoModal = ({ children }) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('#my_modal_3').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}>
        open modal
      </button> */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-gray-500 absolute right-2 top-2">
              ✕
            </button>
          </form>
          {children}
        </div>
      </dialog>
    </div>
  );
};

export default InfoModal;
