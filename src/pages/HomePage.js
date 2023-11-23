import React from "react";
import { Link } from "react-router-dom";
import RulesCarousel from "../components/RulesCarousel";

export default function HomePage() {
  const slides = [
    <img src="https://placekitten.com/800/400" alt="Slide 1" />,
    <img src="https://placekitten.com/800/401" alt="Slide 2" />,
    <img src="https://placekitten.com/800/402" alt="Slide 3" />,
  ];
  return (
    <div>
      <div className="mx-4">
        <RulesCarousel slides={slides} />
      </div>
      <div>
        <Link to="/create">
          <button className="bg-blue-700 text-3xl font-bold py-2 px-5 rounded-md">
            Play
          </button>
        </Link>
      </div>
    </div>
  );
}
