import React, { useState } from "react";
import randominator from "../util/Randominator";

export default function DialogBox() {
  const [inputWord, setinputWord] = useState("");
  const [outputWord, setOutputWord] = useState("jumbled word");
  const handleChange = (e) => {
    setinputWord(e.target.value.toLowerCase());
  };
  const handleSubmit = () => {
    const isAlphabetic = /^[A-Za-z]{2,}$/u.test(inputWord);
    if (!isAlphabetic) {
      alert(
        "Enter only a single word which contains english alphabet letters and is of length greater than 1"
      );
      setinputWord("");
    } else {
      setOutputWord(randominator(inputWord));
      //setOutputWord(outputWord);
    }
  };
  return (
    <div>
      <div>
        <input
          type="text"
          className="border rounded-md p-2 ring-1 border-blue-700 bg-slate-800"
          value={inputWord}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          placeholder="original word"
        />
        <button
          className=" bg-blue-700 p-2 ml-2 rounded-md text-md hover:bg-blue-800 active:bg-blue-600"
          onClick={handleSubmit}
        >
          🪄
        </button>
      </div>
      <div className=" text-center">
        <h2 className="py-2 m-2 border-dashed border-2 border-blue-700 hover:border-solid">
          <div className={outputWord === "jumbled word" ? "opacity-30" : ""}>
            {outputWord}
          </div>
        </h2>
      </div>
    </div>
  );
}
