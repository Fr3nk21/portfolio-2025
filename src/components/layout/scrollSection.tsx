'use client';

import React, { useEffect, useState } from 'react';

const ScrollSection = () => {
  const [activeSection, setActiveSection] = useState(1);

  // Images for each section
  const sectionImages: Record<number, string> = {
    1: '/photo-01.webp',
    2: '/photo-02.webp',
    3: '/photo-03.webp',
    4: '/photo-04.webp',
    5: '/photo-05.webp',
    6: '/photo-06.webp',
  };

  useEffect(() => {
    // Create an Intersection Observer
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const sectionId = parseInt(entry.target.id.split('-')[1]);
          if (!isNaN(sectionId)) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    document.querySelectorAll('[id^="section-"]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center bg-black p-10">
      <h2 className="mb-10 text-4xl font-bold text-white">
        Still, wondering why you should learn Web3 with us?
      </h2>
      <div className="flex w-full flex-row gap-8">
        {/* Left side - Fixed Image */}
        <div className="sticky top-0 h-screen w-1/2">
          <div className="relative h-full w-full">
            <img
              src={sectionImages[activeSection]}
              alt={`Section ${activeSection} illustration`}
              className="h-full w-full object-cover transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Right side - Scrolling sections */}
        <div className="w-1/2">
          <div
            id="section-1"
            className="items-left flex h-screen flex-col justify-center p-10"
          >
            <h3 className="text-2xl font-bold text-white">
              Study when it is convenient for you.
            </h3>
            <p className="text-white">
              Our courses are available on an online platform. You can study at
              any convenient time.
            </p>
          </div>

          <div
            id="section-2"
            className="items-left flex h-screen flex-col justify-center p-10"
          >
            <h3 className="text-2xl font-bold text-white">
              Learn from top developers, managers, and other specialists from
              the Blockchain niche.
            </h3>
            <p className="text-white">
              They invested their professional knowledge and experience in ICB
              course programs. Also, we cooperate with the most popular
              blockchains to create only relevant educational materials.
            </p>
          </div>

          <div
            id="section-3"
            className="items-left flex h-screen flex-col justify-center p-10"
          >
            <h3 className="text-2xl font-bold text-white">
              Complete practical tasks and receive homework feedback from your
              mentor.
            </h3>
            <p className="text-white">
              You will join the discord community to get your mentor support,
              after starting the course.
            </p>
          </div>

          <div
            id="section-4"
            className="items-left flex h-screen flex-col justify-center p-10"
          >
            <h3 className="text-2xl font-bold text-white">
              Focus on the most important information and avoid wasting time.
            </h3>
            <p className="text-white">
              The information of the lesson is selected and structured. You
              obtain only helpful materials.
            </p>
          </div>

          <div
            id="section-5"
            className="items-left flex h-screen flex-col justify-center p-10"
          >
            <h3 className="text-2xl font-bold text-white">
              Get additional materials for an in-depth study of the topic.
            </h3>
            <p className="text-white">
              The course authors have prepared additional guides, useful links,
              etc..
            </p>
          </div>

          <div
            id="section-6"
            className="items-left flex h-screen flex-col justify-center p-10"
          >
            <h3 className="text-2xl font-bold text-white">
              Opportunity to get a job after graduation.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
