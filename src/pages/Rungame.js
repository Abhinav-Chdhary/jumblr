import React from "react";
import { Link } from "react-router-dom";

export default function Rungame() {
  return (
    <div>
      <Link to="/create">
        <button className="bg-blue-700 text-3xl font-bold py-2 px-5 rounded-md">
          Play again ⮚
        </button>
      </Link>
    </div>
  );
}
