import React from "react";
import { Link } from "react-router-dom";
import RulesCarousel from "../components/RulesCarousel";

export default function HomePage() {
  const slides = [
    <img src={process.env.PUBLIC_URL + "/1.png"} alt="Slide 1" />,
    <img src={process.env.PUBLIC_URL + "/2.png"} alt="Slide 2" />,
    <img src={process.env.PUBLIC_URL + "/3.png"} alt="Slide 3" />,
    <img src={process.env.PUBLIC_URL + "/4.png"} alt="Slide 4" />,
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="mx-4">
        <RulesCarousel slides={slides} />
      </div>

      <Link to="/create">
        <button className="bg-blue-700 text-3xl font-bold py-2 px-5 rounded-md my-4 hover:bg-blue-800 active:bg-blue-600">
          Play
        </button>
      </Link>
    </div>
  );
}
