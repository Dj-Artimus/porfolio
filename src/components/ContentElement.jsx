import React, { useState, useRef, useEffect } from "react";
import { MdExpandMore } from "react-icons/md";

const ContentElement = ({ content }) => {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(true);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      const lineHeight = parseFloat(
        getComputedStyle(contentRef.current).lineHeight
      );
      const maxHeight = lineHeight * 3;
      setContentHeight(maxHeight);
      setShowToggle(contentRef.current.scrollHeight > maxHeight);
    }
  }, [content]);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className=" w-full mx-auto">
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 text-lg`}
        style={{
          maxHeight: expanded
            ? `${contentRef.current.scrollHeight}px`
            : `${contentHeight}px`,
        }}
      >
        <pre className=" text-wrap font-sans">{`${content}`}</pre>
      </div>
      <div className="flex justify-end mb-1">
        <button
          onClick={toggleExpand}
          className="flex items-center gap-[1px] text-sm text-blue-500 transition-all duration-300 hover:text-blue-600"
        >
          {expanded ? "Less" : "More"}
          <MdExpandMore
            className={`transform transition-transform duration-300 ${
              expanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ContentElement;
