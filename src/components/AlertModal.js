import React from "react";

export default function AlertModal({ isOpen, onClose }) {
  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } inset-0 h-full w-full z-50 overflow-hidden flex justify-center items-center animated fadeIn`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="bg-white w-1/3 p-6 rounded-md shadow-md">
        <div className="mb-4 text-center text-xl font-bold  bg-black">
          You must input 5 words
        </div>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
