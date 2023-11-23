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
    <div className="flex items-center justify-center">
      <button onClick={prevSlide} className="text-2xl">
        ⮘
      </button>
      <div className="max-w-screen-lg w-full h-96">
        <div className="w-full h-full">{slides[currentIndex]}</div>
      </div>
      <button onClick={nextSlide} className="text-2xl">
        ⮚
      </button>
    </div>
  );
}
