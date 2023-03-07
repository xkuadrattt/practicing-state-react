import React, { useState } from "react";

const Inputdo = (props) => {
  const [text, setText] = useState("");
  return (
    <form className="flex py-8">
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="ring-1 p-4 ring-sky-300"
        placeholder="Tuai harapan Anda"
      />
      <button
        className="px-4 py-1 ml-4 bg-green-100 rounded-xl"
        onClick={() => {
          props.add(text);
        }}
      >
        Add
      </button>
    </form>
  );
};

export default Inputdo;
