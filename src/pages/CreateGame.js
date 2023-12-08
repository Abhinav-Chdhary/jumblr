import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DialogBox from "../components/DialogBox";
import { useWordContext } from "../components/WordContext";
import AlertModal from "../components/AlertModal";

export default function CreateGame() {
  const navigator = useNavigate();
  const originalMap = new Map();
  const jumbleMap = new Map();
  const { addOriginalWords, addJumbledWords } = useWordContext();
  const [myWords, setMyWords] = useState(originalMap);
  const [myJumbledWords, setMyJumbledWords] = useState(jumbleMap);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWordUpdate = (word, index, setter) => {
    setter((prevWords) => {
      const newWords = new Map(prevWords);
      newWords.set(index, word);
      return newWords;
    });
  };

  const handleGameCreated = (e) => {
    e.preventDefault();
    const wordsArray = Array.from(myWords.values());
    const jumbledWordsArray = Array.from(myJumbledWords.values());

    if (
      wordsArray.length < 5 ||
      jumbledWordsArray.length < 5 ||
      wordsArray.includes("") ||
      jumbledWordsArray.includes("")
    ) {
      setIsModalOpen(true);
    } else {
      addOriginalWords(wordsArray);
      addJumbledWords(jumbledWordsArray);
      navigator("/run");
    }
  };

  return (
    <div>
      <h2 className="py-2">Hi! Please enter 5 words to jumble:</h2>
      {[0, 1, 2, 3, 4].map((index) => (
        <DialogBox
          key={index}
          onOriginalWordUpdate={(word) =>
            handleWordUpdate(word, index, setMyWords)
          }
          onJumbleWordUpdate={(word) =>
            handleWordUpdate(word, index, setMyJumbledWords)
          }
          index={index}
        />
      ))}
      <button
        className="bg-blue-700 text-3xl font-bold py-2 px-5 rounded-md my-4 hover:bg-blue-800 active:bg-blue-600"
        onClick={handleGameCreated}
      >
        Done ⮚
      </button>

      {isModalOpen && (
        <AlertModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
