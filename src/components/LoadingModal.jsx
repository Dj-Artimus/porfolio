import React, { useEffect } from "react";
import { FaMoon, FaMusic } from "react-icons/fa";
import ReactSwitch from "react-switch";
import { IoClose } from "react-icons/io5";

const LoadingModal = ({
  loadingProgress,
  isLoading,
  setIsLoading,
  onThemeToggle,
  isDarkMode,
  onMusicToggle,
  isMusicOn,
}) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden !important";
    } else if (!isLoading && document.body.style.overflow === "hidden") {
      document.body.style.overflow = ""; // Unlock only if locked by this modal
    }
  
    return () => {
      document.body.style.overflow = ""; // Cleanup
    };
  }, [isLoading]);
  
  return (
    isLoading && (
      <div
        className={`fixed w-screen overflow-hidden inset-0 flex items-center justify-center bg-black px-2 z-[200]`}
      >
        <div className="flex flex-col items-center bg-slate-900 rounded-3xl shadow-lg p-5 border relative">
          <img
            src="/images/coding.gif" // Replace with your image path
            alt="Loading"
            className="w-full max-w-3xl h-auto aspect-[16/9] mb-4 rounded-2xl border"
          />
          <div className="w-full bg-gray-500 rounded-full h-4 relative">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${loadingProgress}%` }}
            />
            <div className=" absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-xs">
              {" "}
              {loadingProgress}%{" "}
            </div>
          </div>

          <h1 className="text-lg my-2 animate-pulse">
            Loading assets, Please wait ...
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center gap-2">
              <FaMoon className="text-gray-500" />
              <span className="me-2">Dark Mode</span>
              <ReactSwitch
                onChange={onThemeToggle}
                checked={isDarkMode}
                onColor="#3b82f6" // Tailwind's blue-500 color
                offColor="#ccc"
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={35}
                handleDiameter={16}
              />
            </div>
            <div className="w-[2px] hidden sm:block h-5 rounded-full bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <FaMusic className="text-gray-500" />
              <span className="me-2">Music</span>
              <ReactSwitch
                onChange={onMusicToggle}
                checked={isMusicOn}
                onColor="#3b82f6" // Tailwind's blue-500 color
                offColor="#ccc"
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={35}
                handleDiameter={16}
              />
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3 text-center mx-5">
            You can also toggle this options later in settings menu.
          </p>
          <div
            onClick={() => {
              setIsLoading(false);
            }}
            className="absolute bottom-2 right-2 text-2xl text-gray-400 cursor-pointer"
          >
            <IoClose />
          </div>
        </div>
      </div>
    )
  );
};

export default LoadingModal;
