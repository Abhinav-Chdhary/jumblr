import React, { useEffect, useState } from "react";

export default function CheckerBox({ question, answer, onUpdate }) {
  const [userAnswer, setUserAnswer] = useState("");
  const handleChange = (e) => {
    setUserAnswer(e.target.value);
  };
  useEffect(() => {
    handleCheck();
  }, [userAnswer]);

  const handleCheck = () => {
    onUpdate(userAnswer === answer ? 10 : 0);
  };
  return (
    <div className="flex items-center m-2">
      <h2 className="border-solid border-2 border-blue-700 p-2 rounded-md w-32 text-center">
        {question}
      </h2>
      <div className="ml-4">
        <input
          name="answer"
          type="text"
          className="border rounded-md p-2 ring-1 border-blue-700 bg-slate-800"
          placeholder="What can it be?"
          value={userAnswer}
          onChange={handleChange}
        />
        <span className="bg-white p-2 ml-2 rounded-md text-md">
          {userAnswer === answer ? <>✅</> : <>🔍</>}
        </span>
      </div>
    </div>
  );
}
