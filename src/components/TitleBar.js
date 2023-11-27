import React from "react";
import { Link } from "react-router-dom";

export default function TitleBar() {
  return (
    <Link to="/">
      <div className="bg-blue-700 text-white p-4 fixed top-0 left-0">
        <h1 className="text-2xl font-bold">Jumblr.io</h1>
      </div>
    </Link>
  );
}
