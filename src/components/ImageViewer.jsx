import React, { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { IoIosArrowForward } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
// Example images array (for testing)

const ImageViewer = ({
  imgViewerSources,
  imgViewerIndex,
  setImgViewerSources,
  setImgViewerIndex,
}) => {
  const handleClose = () => {
    setTimeout(() => {
      setImgViewerSources([]);
    }, 500); // Animation duration
  };

  const imgSrc = imgViewerSources[imgViewerIndex]?.split("<|>")[0];

  const goToNext = () => {
    setImgViewerIndex((imgViewerIndex + 1) % imgViewerSources.length);
  };

  const goToPrev = () => {
    setImgViewerIndex(
      (imgViewerIndex - 1 + imgViewerSources.length) % imgViewerSources.length
    );
  };

  // Swipe handlers
  const swipeHandlersForImages = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrev(),
  });

  useEffect(() => {
    if (imgViewerSources.length > 0) {
      // Lock scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Unlock scrolling
      document.body.style.overflow = "";
    }

    console.log(imgSrc);
    console.log(imgSrc?.includes("Mockup"));

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [imgViewerSources]);

  return (
    <>
      {imgViewerSources.length > 0 && (
        <div className="w-screen h-screen fixed z-[100] left-0 top-0 overflow-hidden">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={` w-full h-full flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md transition-opacity duration-500 ease-in-out`}
              onClick={handleClose}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative flex items-center"
              >
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 z-10 bg-slate-600 text-white bg-opacity-50 rounded-full p-[2px] transition-transform transform hover:scale-110"
                >
                  <CgClose className="size-6" />
                </button>
                {/* Previous Button */}
                {imgViewerSources.length > 1 && (
                  <button
                    onClick={goToPrev}
                    className="absolute left-2 z-10 bg-slate-600 text-white rounded-full p-1 pe-[7px] shadow shadow-slate-900 flex justify-center items-center transition-transform transform hover:scale-110 bg-opacity-50"
                  >
                    <IoIosArrowForward className=" rotate-180 size-5 " />
                  </button>
                )}
                {/* Image */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="">
                    <div
                      {...swipeHandlersForImages}
                      className={`relative ${
                        imgSrc.includes("Mockup")
                          ? "aspect-[4/3]"
                          : "aspect-square"
                      } h-[90vh] max-w-[90vw] max-h-fit shadow-slate-500 border border-slate-700 rounded-md shadow-sm transition-transform duration-500 ease-out`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`Image ${imgViewerIndex + 1}`}
                        fill
                        priority
                        unselectable="on"
                        className="object-contain rounded-md transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-2 space-x-2">
                    {imgViewerSources.length > 1 &&
                      imgViewerSources.map((_, index) => (
                        <span
                          key={index}
                          onClick={() => setImgViewerIndex(index)}
                          className={`h-2 w-2 rounded-full cursor-pointer ${
                            index === imgViewerIndex
                              ? "bg-blue-600"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                  </div>
                </motion.div>
                {/* Next Button */}
                {imgViewerSources.length > 1 && (
                  <button
                    onClick={goToNext}
                    className="absolute right-2 z-10 bg-slate-600 text-white shadow shadow-slate-900 rounded-full p-1 ps-[7px] transition-transform flex justify-center items-center transform hover:scale-110 bg-opacity-50"
                  >
                    <IoIosArrowForward className="size-5" />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default ImageViewer;
