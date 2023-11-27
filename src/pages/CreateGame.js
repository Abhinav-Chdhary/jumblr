import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DialogBox from "../components/DialogBox";
import { useWordContext } from "../components/WordContext";

export default function CreateGame() {
  const navigator = useNavigate();
  const { addOriginalWords } = useWordContext();
  const { addJumbledWords } = useWordContext();
  const [myWords, setMyWords] = useState(["", "", "", "", ""]);
  const [myJumbledWords, setJumbledWords] = useState(["", "", "", "", ""]);
  const handleOriginalWordUpdate = (word, index) => {
    setMyWords((prevWords) => {
      const newWords = [...prevWords];
      newWords[index] = word;
      return newWords;
    });
  };
  const handleJumbleWordUpdate = (word, index) => {
    setJumbledWords((prevWords) => {
      const newWords = [...prevWords];
      newWords[index] = word;
      return newWords;
    });
  };
  const handleGameCreated = (e) => {
    //console.log(myWords, myJumbledWords);
    e.preventDefault();
    addOriginalWords(myWords);
    addJumbledWords(myJumbledWords);
    navigator("/run");
  };
  return (
    <div>
      <h2 className=" py-2">Hi! Please enter 5 word to jumble:</h2>
      <DialogBox
        onOriginalWordUpdate={handleOriginalWordUpdate}
        onJumbleWordUpdate={handleJumbleWordUpdate}
        index={0}
      />
      <DialogBox
        onOriginalWordUpdate={handleOriginalWordUpdate}
        onJumbleWordUpdate={handleJumbleWordUpdate}
        index={1}
      />
      <DialogBox
        onOriginalWordUpdate={handleOriginalWordUpdate}
        onJumbleWordUpdate={handleJumbleWordUpdate}
        index={2}
      />
      <DialogBox
        onOriginalWordUpdate={handleOriginalWordUpdate}
        onJumbleWordUpdate={handleJumbleWordUpdate}
        index={3}
      />
      <DialogBox
        onOriginalWordUpdate={handleOriginalWordUpdate}
        onJumbleWordUpdate={handleJumbleWordUpdate}
        index={4}
      />
      <button
        className="bg-blue-700 text-3xl font-bold py-2 px-5 rounded-md my-4 hover:bg-blue-800 active:bg-blue-600"
        onClick={handleGameCreated}
      >
        Done ⮚
      </button>
    </div>
  );
}
