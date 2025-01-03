import React from "react";

const Logo = () => {
  return (
        <div className="fixed h-44 z-50 hidden">
          <div className=" relative h-full border">
            <div className="h-28 w-full border"></div>
            <div className=" z-50">
                  <h1 className="sticky top-0 left-[12vw] text-[3vw] w-fit font-extrabold text-primary font-dancingScript -rotate-12 bo rder backdrop-blur-sm bg-black bg-opacity-50 rounded-full leading-none">
                    DjArtimus
                  </h1>
            </div>
          </div>
        </div>
  );
};

export default Logo;
