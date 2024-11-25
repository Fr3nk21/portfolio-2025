'use client';
import React from 'react';

const ScrollingCarousel = () => {
  const text = 'Solana Foundation Educational Partner';
  const sections = [text, text, text, text];

  return (
    <section className="flex items-center justify-center border-b-2 border-white bg-black">
      <div className="relative w-full overflow-hidden py-10">
        <div className="flex animate-carousel whitespace-nowrap">
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
    </section>
  );
};

export default ScrollingCarousel;
