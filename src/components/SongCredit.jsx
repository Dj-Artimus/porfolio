"use client";

import { motion } from "framer-motion";

const SongCredit = () => {
  return (
    <div className="relative w-[38vw] lg:w-full overflow-hidden rounded-full">
      <p className=" bg-gradient-to-r from-white dark:from-black from-5% to-transparent z-10 w-3 h-full absolute -left-0 top-0"></p>
      <motion.div
        className="inline-block whitespace-nowrap relative"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <p className="px-4 italic font-thin">Song: Back in Black by AC/DC</p>
      </motion.div>
      <p className="bg-gradient-to-l from-white dark:from-black from-5% to-transparent z-10 w-3 h-full absolute right-0 top-0 bg-opacity-35"></p>
    </div>
  );
};

export default SongCredit;
