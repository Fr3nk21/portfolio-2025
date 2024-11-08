'use client';
import React, { useEffect, useState } from 'react';

const ScrollingCarousel = () => {
  const [position, setPosition] = useState(0);

  // Split text into multiple sections for carousel effect
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor earum suscipit similique sapiente labore alias dicta tenetur quae repudiandae mollitia autem dignissimos distinctio eos animi quibusdam, omnis quis praesentium perferendis.';
  const sections = [text, text, text];

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setPosition((prev) => {
        if (prev <= -100) {
          return 0; // Reset position when first section is completely scrolled
        }
        return prev - 0.5; // Adjust speed by changing this value
      });
    }, 50); // Adjust interval for smoother/faster scrolling

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="relative w-full py-10">
      <div
        className="flex whitespace-nowrap transition-transform duration-1000"
        style={{
          transform: `translateX(${position}%)`,
          transition: position === 0 ? 'none' : 'transform 0.5s linear',
        }}
      >
        {sections.map((section, index) => (
          <p
            key={index}
            className="inline-block w-full px-4 text-center text-white"
          >
            {section}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollingCarousel;
