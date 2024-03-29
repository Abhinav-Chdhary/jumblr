import React, { useState } from "react";

export default function RulesCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sizeOfSlides = slides.length;

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex - 1 + sizeOfSlides) % sizeOfSlides
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % sizeOfSlides);
  };

  return (
    <div className="flex items-center justify-center relative">
      <button
        onClick={prevSlide}
        className="text-2xl hover:text-blue-700 active:text-blue-800 transform transition-transform hover:scale-125 active:scale-90"
      >
        ⮘
      </button>
      <div className="md:max-w-screen-lg relative">
        <div className=" w-full relative overflow-hidden">
          {slides[currentIndex]}
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="text-2xl hover:text-blue-700 active:text-blue-800 transform transition-transform hover:scale-125 active:scale-90"
      >
        ⮚
      </button>
    </div>
  );
}
