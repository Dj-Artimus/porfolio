import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export const HeroContentTemplate = ({ key, sHeading, bHeading, mHeading }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.h1
          key={key}
          className="text-[6vw] sm:text-[5.5vw] lg:text-[2.5vw] font-bold"
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
          className="text-[14vw] sm:text-[12vw] lg:text-[7vw] font-bold leading-none"
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
          className=" text-[7vw] lg:text-[3.3vw] w-fit h-[6vh] text-gray-800 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 hover:font-bold"
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

export const HeroImageTemplate = ({ imageKey, src }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={imageKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={src}
        alt={imageKey}
        className="w-[50vw] sm:w-[35vw] lg:w-[13.5vw] aspect-[16/9] object-cover rounded-[4vw] lg:rounded-[1.6vw] bg-black p-[2.3vw] sm:p-[1.7vw] lg:p-[0.75vw] lg:hover:p-[0.5vw] transition-all duration-300"
      />
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
