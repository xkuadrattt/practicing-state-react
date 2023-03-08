import { useState } from "react";

export default function Inputdo({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <form>
      <input
        className="ring-1 p-4 ring-sky-300"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="px-4 py-1 ml-4 bg-green-100 rounded-xl"
        onClick={(e) => {
          e.preventDefault();
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </form>
  );
}
