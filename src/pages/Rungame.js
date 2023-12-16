import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWordContext } from "../components/WordContext";
import CheckerBox from "../components/CheckerBox";
import GameOverModal from "../components/GameOverModal";

export default function Rungame() {
  const navigator = useNavigate();
  const [timer, setTimer] = useState(59);
  const { originalWords } = useWordContext();
  const { jumbledWords } = useWordContext();
  const [score, setScore] = useState(0);
  const [isGameOverOpen, setGameOverOpen] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 0 || score === 50) {
          clearInterval(timerId);
          setGameOverOpen(true);
        }
        return prevTime === 0 ? 0 : prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [score]);
  useEffect(() => {
    if (jumbledWords.length < 5) {
      navigator("/create");
    }
  }, [jumbledWords, navigator]);

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
      {isGameOverOpen && (
        <GameOverModal onClose={() => setGameOverOpen(false)} score={score} />
      )}
    </div>
  );
}
