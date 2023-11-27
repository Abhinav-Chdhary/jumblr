import React, { useContext, useState, createContext } from "react";

const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [originalWords, setOriginalWords] = useState([]);
  const [jumbledWords, setJumbledWords] = useState([]);

  const addOriginalWords = (words) => {
    setOriginalWords(words);
  };
  const addJumbledWords = (words) => {
    setJumbledWords(words);
  };

  return (
    <WordContext.Provider
      value={{
        originalWords,
        addOriginalWords,
        jumbledWords,
        addJumbledWords,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export const useWordContext = () => {
  return useContext(WordContext);
};
