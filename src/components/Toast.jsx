import React, { useEffect } from "react";

const Toast = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose(); // Hide the toast after 3 seconds
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-8 right-1/2 translate-x-1/2 w-full px-6`}
    >
      <p className={`px-4 py-3 rounded-lg shadow-lg text-white text-sm font-medium transition-opacity duration-300 w-full ${
        type === "success"
          ? "bg-green-500 dark:bg-green-700"
          : type === "error"
          ? "bg-red-500 dark:bg-red-700"
          : "bg-gray-500"
      }`}>{message}</p>
    </div>
  );
};

export default Toast;
