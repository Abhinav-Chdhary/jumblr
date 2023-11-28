import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWordContext } from "../components/WordContext";
import CheckerBox from "../components/CheckerBox";

export default function Rungame() {
  const [timer, setTimer] = useState(59);
  const { originalWords } = useWordContext();
  const { jumbledWords } = useWordContext();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleScoreUpdate = (value) => {
    setScore((prevScore) => prevScore + value);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="bg-blue-700 text-3xl font-bold py-2 px-5 rounded-md hover:bg-blue-800 active:bg-blue-600">
          Score:{score}
        </h3>
        <h1 className="bg-blue-700 text-3xl font-bold py-2 px-5 rounded-md hover:bg-blue-800 active:bg-blue-600">
          {timer}
        </h1>
      </div>

      {jumbledWords.map((jumbledWord, index) => (
        <CheckerBox
          key={index}
          question={jumbledWord}
          answer={originalWords[index]}
          onUpdate={handleScoreUpdate}
        />
      ))}

      <Link to="/create">
        <button className="bg-blue-700 text-3xl font-bold py-2 px-5 rounded-md hover:bg-blue-800 active:bg-blue-600">
          Play again ⮚
        </button>
      </Link>
    </div>
  );
}
