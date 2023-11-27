import React from "react";

export default function CheckerBox({ question, answer }) {
  return (
    <div>
      <div>
        <input
          type="text"
          className="border rounded-md p-2 ring-1 border-blue-700 bg-slate-800"
          ceholder="original word"
        />
        <button className=" bg-white p-2 ml-2 rounded-md text-md hover:bg-gray-300 active:bg-gray-400">
          🔍
        </button>
      </div>
      <div className=" text-center">
        <h2 className="py-2 m-2 border-dashed border-2 border-blue-700 hover:border-solid">
          <div className="opacity-30">"Answer"</div>
        </h2>
      </div>
    </div>
  );
}
