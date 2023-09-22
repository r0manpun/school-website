import React from 'react';

const Dialog = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center`}
    >
      <div className="bg-white p-8 rounded shadow-lg">
        {children}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Dialog;