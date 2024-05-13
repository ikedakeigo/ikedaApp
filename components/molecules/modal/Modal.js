import React, { useState } from "react";
import ModalOpen from "./ModalOpen";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  return (
    <>
      <ModalOpen isvisible={showModal} onClose={() => setShowModal(false)}>
        モーダル表示の中身
      </ModalOpen>

      <ModalOpen isvisible={showModal2} onClose={() => setShowModal2(false)}>
        モーダル表示の中身__2
      </ModalOpen>

      <ModalOpen isvisible={showModal3} onClose={() => setShowModal3(false)}>
        モーダル表示の中身__3
      </ModalOpen>

      <ModalOpen isvisible={showModal4} onClose={() => setShowModal4(false)}>
        モーダル表示の中身__4
      </ModalOpen>

      <div className="shadow-lg bg-white p-8 mb-4">
        <div className="px-4">
          <ul className="list-none mb-2">
            <li className="flex items-center border rounded px-4 mb-2 h-14 border-gray-400 bg-red-100">
              <span className="flex-shrink-0 block font-bold w-18">
                現住所：
              </span>
              <button
                className="flex-grow h-full flex items-center text-gray-600 truncate cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                エリアを選択
              </button>
            </li>
            <li className="flex items-center border rounded px-4 mb-2 h-14 border-gray-400 bg-red-100">
              <span className="flex-shrink-0 block font-bold w-18">
                引越し先：
              </span>
              <button
                className="flex-grow h-full flex items-center text-gray-600 truncate cursor-pointer"
                onClick={() => setShowModal2(true)}
              >
                エリアを選択
              </button>
            </li>
            <li className="flex items-center border rounded px-4 mb-2 h-14 border-gray-400 bg-red-100">
              <span className="flex-shrink-0 block font-bold w-18">荷物：</span>
              <a
                className="flex-grow h-full flex items-center text-gray-600 truncate cursor-pointer"
                onClick={() => setShowModal3(true)}
              >
                荷物を選択{" "}
              </a>
            </li>
            <li className="flex border rounded px-4 mb-2 h-14 border-gray-400 items-center">
              <span className="flex-shrink-0 block font-bold w-18">
                作業員：
              </span>
              <span className="block w-2/5 max-w-xs mr-2">
                <button className="w-full h-9 border-none bg-gray-400 rounded-full text-sm text-gray-800">
                  2名
                </button>
              </span>
              <span className="block w-2/5 max-w-xs mr-2">
                <button className="w-full h-9 border-none bg-gray-400 rounded-full text-sm text-white bg-gray-800">
                  1名
                </button>
              </span>
            </li>
            <li className="border-gray-400 border rounded mb-2">
              <a
                className="border rounded flex p-4"
                data-backdrop="true"
                data-target="#calendarModal"
                data-toggle="modal"
              >
                <div className="flex-shrink-0 block font-bold leading-6 w-18 text-gray-800">
                  希望日:
                </div>
                <div
                  className="overflow-hidden text-gray-600 block leading-6 w-full truncate cursor-pointer"
                  onClick={() => setShowModal4(true)}
                >
                  引越し希望日を選択
                </div>
                <div className="inline-block w-6 h-6 ml-auto"></div>
              </a>
            </li>
          </ul>
          <div className="text-center pt-2">
            <button
              className="bg-orange-500 text-lg cursor-default"
              id="search-button"
              disabled
            >
              決定
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
