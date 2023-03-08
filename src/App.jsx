import React, { useState } from "react";
import { Inputdo, Listdo } from "./components";

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  return (
    <main className="container mx-auto p-4 sm:px-0">
      <h1 className="text-xl text-pink-400 font-bold">Prague itinerary</h1>
      <Inputdo onAddTask={handleAddTask} />
      <Listdo tasks={tasks} />
    </main>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
