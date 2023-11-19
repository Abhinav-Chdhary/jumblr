import React from "react";
import DialogBox from "./components/DialogBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateGame from "./pages/CreateGame";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/create" element={<CreateGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
