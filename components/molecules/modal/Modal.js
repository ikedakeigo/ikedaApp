import React, { useState } from "react";
import ModalOpen from "./ModalOpen";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="p-10 text-center">
        <h1 className="text-3xl">
          Create Custom Modal in React JS width Tailwind CSS
        </h1>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
        onClick={() => setShowModal(true)}>
          Text Modal
        </button>
      </div>
      <ModalOpen isvisible={showModal} onClose={() => setShowModal(false) }>
        モーダル表示の中身
      </ModalOpen>
    </>
  );
};

export default Modal;
