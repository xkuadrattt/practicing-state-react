import React from "react";

const Inputdo = () => {
  return (
    <form className="flex py-8">
      <input
        type="text"
        className="ring-1 p-4 ring-sky-300"
        placeholder="Tuai harapan Anda"
      />
      <button className="px-3 py-1 ml-4 bg-green-100">Add</button>
    </form>
  );
};

export default Inputdo;
