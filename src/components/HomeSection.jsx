import React, { useState } from 'react';
import anime from 'animejs';

const HomeSection = () => {
  const [activePage, setActivePage] = useState(0);

  const handleClick = (event, index) => {
    const x = event.pageX;
    const y = event.pageY;
    const nextPage = (index + 1) % 3;

    // Set initial clip-path for the next page
    const nextPageElement = document.querySelector(`.page-${nextPage}`);
    nextPageElement.style.clipPath = `circle(0% at ${x}px ${y}px)`;
    nextPageElement.style.zIndex = parseInt(document.querySelector(`.page-${index}`).style.zIndex) + 1;

    anime({
      targets: nextPageElement,
      update: function (anim) {
        nextPageElement.style.clipPath = `circle(${anim.progress * 2}% at ${x}px ${y}px)`;
      },
      easing: 'easeInOutQuad',
      duration: 1000,
      complete: () => {
        setActivePage(nextPage);
      },
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-2xl transition-all duration-500 ease-in-out page-${index} ${
            activePage === index ? 'z-10' : 'z-0'
          }`}
          style={{
            backgroundColor: ['lightblue', 'lightcoral', 'lightgreen'][index],
            clipPath: activePage === index ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
          }}
          onClick={(event) => handleClick(event, index)}
        >
          Page {index + 1}
        </div>
      ))}
    </div>
  );
};

export default HomeSection;
