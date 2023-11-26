import React from "react";
import { Link } from "react-router-dom";
import { useWordContext } from "../components/WordContext";

export default function Rungame() {
  const { originalWords } = useWordContext();
  return (
    <div>
      <h3>List of Words:</h3>
      <ul>
        {originalWords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
      <Link to="/create">
        <button className="bg-blue-700 text-3xl font-bold py-2 px-5 rounded-md hover:bg-blue-800 active:bg-blue-600">
          Play again ⮚
        </button>
      </Link>
    </div>
  );
}
