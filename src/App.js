import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateGame from "./pages/CreateGame";
import TitleBar from "./components/TitleBar";
import Rungame from "./pages/Rungame";
import { WordProvider } from "./components/WordContext";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <TitleBar />
      <WordProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/create" element={<CreateGame />} />
            <Route exact path="/run" element={<Rungame />} />
          </Routes>
        </BrowserRouter>
      </WordProvider>
    </div>
  );
}
