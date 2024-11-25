'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 0;
      setIsSticky(window.scrollY > scrollThreshold);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed left-0 right-0 top-0 z-50 flex flex-row items-center justify-between p-8 transition-all duration-300 ease-in-out ${isSticky ? 'bg-yellow-400' : 'bg-black'}`}
    >
      <div>
        <Image
          src="/main-logo.svg"
          width={100}
          height={100}
          alt="Platform's logo"
        />
      </div>
      <div className="ml-auto flex flex-row items-center justify-center">
        <ul className="mr-10 flex flex-row gap-10">
          <li className="text-white">Courses</li>
          <li className="text-white">About us</li>
          <li className="text-white">Blog</li>
          <li className="text-white">Custom Course Solutions</li>
          <li className="text-white">Contacts</li>
        </ul>
      </div>
      <div>
        <Button
          variant="outline"
          className="w-32 rounded-full border-white bg-black text-xl font-bold text-white hover:bg-white hover:text-black"
        >
          Log In
          <Image
            src="/button-arrow.svg"
            width={20}
            height={20}
            alt="Placeholder image"
          />
        </Button>
      </div>
    </section>
  );
}
