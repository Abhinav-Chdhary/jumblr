import React from "react";
import { Link } from "react-router-dom";

export default function GameOverModal({ score, onClose }) {
  return (
    <div className="fixed inset-0 h-full w-full z-50 overflow-hidden flex justify-center items-center animated fadeIn bg-black">
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>

      <div className="bg-red-500 w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded-md shadow-md relative">
        <div className="mb-4 text-center text-4xl sm:text-5xl font-bold py-3 px-2">
          Game Over
        </div>
        <div className="mb-4 text-center text-xl sm:text-2xl font-bold">
          Your score: {score}
        </div>
        <div className="flex justify-center">
          <Link to="/create">
            <button className="bg-blue-700 text-xl sm:text-3xl font-bold py-3 px-4 sm:px-5 rounded-md hover:bg-blue-800 active:bg-blue-600">
              Play again ⮚
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
