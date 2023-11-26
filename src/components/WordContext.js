import React, { useContext, useState, createContext } from "react";

const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [originalWords, setOriginalWords] = useState([]);
  const [jumbledWords, setJumbledWords] = useState([]);

  const addOriginalWord = (word) => {
    setOriginalWords((prevWords) => [...prevWords, word]);
  };
  const addJumbledWord = (word) => {
    setJumbledWords((prevWords) => [...prevWords, word]);
  };

  return (
    <WordContext.Provider
      value={{
        originalWords,
        addOriginalWord,
        jumbledWords,
        addJumbledWord,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export const useWordContext = () => {
  return useContext(WordContext);
};
