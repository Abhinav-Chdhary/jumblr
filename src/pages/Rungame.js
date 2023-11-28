import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWordContext } from "../components/WordContext";
import CheckerBox from "../components/CheckerBox";

export default function Rungame() {
  const [timer, setTimer] = useState(59);
  const { originalWords } = useWordContext();
  const { jumbledWords } = useWordContext();
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="bg-blue-700 text-3xl font-bold py-2 px-5 rounded-md hover:bg-blue-800 active:bg-blue-600">
          Score:
        </h3>
        <h1 className="bg-blue-700 text-3xl font-bold py-2 px-5 rounded-md hover:bg-blue-800 active:bg-blue-600">
          {timer}
        </h1>
      </div>
      <CheckerBox question={jumbledWords[0]} answer={originalWords[0]} />
      <CheckerBox question={jumbledWords[1]} answer={originalWords[1]} />
      <CheckerBox question={jumbledWords[2]} answer={originalWords[2]} />
      <CheckerBox question={jumbledWords[3]} answer={originalWords[3]} />
      <CheckerBox question={jumbledWords[4]} answer={originalWords[4]} />
      <Link to="/create">
        <button className="bg-blue-700 text-3xl font-bold py-2 px-5 rounded-md hover:bg-blue-800 active:bg-blue-600">
          Play again ⮚
        </button>
      </Link>
    </div>
  );
}
