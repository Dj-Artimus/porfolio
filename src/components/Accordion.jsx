"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // For animations
import { FiChevronDown } from "react-icons/fi"; // Chevron icon from react-icons

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border border-gray-300 dark:border-gray-600 shadow-sm rounded-lg">
      {/* Accordion Header */}
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full px-4 py-3 text-left rounded-md"
      >
        <span className="font-medium">{title}</span>
        <FiChevronDown
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Accordion Content */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="flex justify-center">{content}</div>
      </motion.div>
    </div>
  );
}
