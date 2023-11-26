import React from "react";
import { Link } from "react-router-dom";
import DialogBox from "../components/DialogBox";

export default function CreateGame() {
  return (
    <div>
      <h2 className=" py-2">Hi! Please enter 5 word to jumble:</h2>
      <DialogBox />
      <DialogBox />
      <DialogBox />
      <DialogBox />
      <DialogBox />
      <Link to="/run">
        <button className="bg-blue-700 text-3xl font-bold py-2 px-5 rounded-md my-4 hover:bg-blue-800 active:bg-blue-600">
          Done ⮚
        </button>
      </Link>
    </div>
  );
}
