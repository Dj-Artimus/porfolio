import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";

export const HeroContentTemplate = ({ key, sHeading, bHeading, mHeading }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.h1
          key={key}
          className=" text-[7vw] xs3:text-3xl md:text-5xl lg:text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {sHeading}
        </motion.h1>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.h1
          key={key}
          className=" text-[15vw] xs3:text-6xl md:text-8xl lg:text-7xl xl:text-8xl font-bold leading-none my-1 md:my-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {bHeading}
        </motion.h1>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          className=" w-fit text-[7vw] xs3:text-[33px] md:text-5xl lg:text-4xl xl:text-5xl text-gray-800 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 hover:font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {mHeading}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

// export const HeroImageTemplate = ({ imageKey, src }) => {
//   return (
//     <AnimatePresence mode="wait">
//       <motion.img
//         key={imageKey}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         src={src}
//         alt={imageKey}
//         className=" w-44 xs2:w-48 xs3:w-52 md:w-64 lg:w-52 aspect-[16/9] object-cover rounded-xl md:rounded-3xl dark:bg-black p-2 lg:p-[10px] lg:hover:p-2 transition-all duration-300"
//       />
//     </AnimatePresence>
//   );
// };

export const HeroImageTemplate = ({ imageKey, src }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={imageKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-44 xs2:w-48 xs3:w-52 md:w-64 lg:w-52 aspect-[16/9] rounded-xl md:rounded-3xl transition-all duration-300 relative"
      >
        <Image
          src={src}
          alt={imageKey}
          fill
          priority
          unoptimized
          unselectable="on"
          className="object-cover rounded-xl md:rounded-3xl dark:bg-black p-2 lg:p-[10px] lg:hover:p-2 transition-all duration-300"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export const HeroVideoTemplate = ({ videoKey, src, styles, loop }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.video
        key={videoKey}
        src={src}
        className={styles}
        muted
        autoPlay={true}
        loop={loop}
        controls={false}
        disablePictureInPicture
        controlsList="nodownload"
      />
    </AnimatePresence>
  );
};
