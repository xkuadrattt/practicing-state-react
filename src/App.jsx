import React, { useState } from "react";
import { Inputdo, Listdo } from "./components";

let idcurrent = 4;
let data = [
  { text: "Rumah 5 tumbak", id: 1 },
  { text: "Menikah dengan perempuan jujur dan sholeh", id: 2 },
  { text: "PC desktop core i5 gen 12 + rtx 3050 setup", id: 3 },
];
function App() {
  const [tasks, setTasks] = useState(data);
  const add = function (text) {
    setTasks([...tasks, { text: text, id: idcurrent++ }]);
  };
  return (
    <main className="container mx-auto p-4 sm:px-0">
      <h1 className="text-xl text-pink-400 font-bold">Pencapaian 2023</h1>
      <Inputdo add={add} />
      <Listdo data={tasks} />
    </main>
  );
}

export default App;
