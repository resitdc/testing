import React from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  const overlayClass = isOpen
    ? "fixed inset-0 bg-black-1 bg-opacity-80 z-900 flex items-center justify-center"
    : "hidden";
  const modalClass = isOpen
    ? "bg-white-1 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-950 overflow-y-auto"
    : "hidden";

  return (
    <div className={overlayClass} onClick={closeModal}>
      <div className={modalClass} onClick={(e) => e.stopPropagation()}>
        <div className="px-4 py-3 flex justify-between items-center">
          <h2 className="text-lg font-medium">Modal Title</h2>
          <button
            className="text-gray-1 hover:text-gray-3 focus:outline-none"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
        <div className="px-4 py-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
