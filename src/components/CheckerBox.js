import React, { useEffect, useState, useCallback } from "react";

export default function CheckerBox({ question, answer, onUpdate }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleChange = (e) => {
    if (!isAnswerCorrect) {
      setUserAnswer(e.target.value);
    }
  };

  const handleCheck = useCallback(() => {
    if (!isAnswerCorrect) {
      const correct = userAnswer === answer;
      onUpdate(correct ? 10 : 0);
      setIsAnswerCorrect(correct);
    }
  }, [answer, isAnswerCorrect, onUpdate, userAnswer]);

  useEffect(() => {
    handleCheck();
  }, [handleCheck]);

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
          disabled={isAnswerCorrect} // Disable the input if the answer is correct
        />
        <span className="bg-white p-2 ml-2 rounded-md text-md">
          {isAnswerCorrect ? <>✅</> : <>🔍</>}
        </span>
      </div>
    </div>
  );
}
