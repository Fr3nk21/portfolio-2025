'use client';
import React from 'react';

const ScrollingCarousel = () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  const sections = [text, text, text, text];

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="animate-carousel flex whitespace-nowrap">
        {sections.map((section, index) => (
          <p
            key={index}
            className="inline-block w-full min-w-full px-4 text-center text-white"
          >
            {section}
          </p>
        ))}
        {/* Duplicate first item to create seamless loop */}
        <p className="inline-block w-full min-w-full px-4 text-center text-white">
          {sections[0]}
        </p>
      </div>
    </div>
  );
};

export default ScrollingCarousel;
