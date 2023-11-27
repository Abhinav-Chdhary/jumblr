import React, { useState } from "react";

export default function CheckerBox({ question, answer }) {
  const [userAnswer, setUserAnswer] = useState("");
  return (
    <div className="flex items-center m-2">
      <h2 className="border-solid border-2 border-blue-700 p-2 rounded-md">
        {question}
      </h2>
      <div className="ml-4">
        <input
          type="text"
          className="border rounded-md p-2 ring-1 border-blue-700 bg-slate-800"
          placeholder="What can it be?"
          value={userAnswer}
          onChange={(e) => {
            setUserAnswer(e.target.value);
          }}
        />
        <button className="bg-white p-2 ml-2 rounded-md text-md hover:bg-gray-300 active:bg-gray-400">
          🔍
        </button>
      </div>
    </div>
  );
}
