import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Call Litraco",
      day: "23-01-2023",
      reminder: true,
    },
    {
      id: 2,
      title: "Draw time table for the week",
      day: "21-01-2023",
      reminder: false,
    },

    {
      id: 3,
      title: "Call Richmond",
      day: "24-01-2023",
      reminder: true,
    },
    {
      id: 4,
      title: "Call Mum and Dad",
      day: "24-01-2023",
      reminder: false,
    },
  ]);
  const deletTask = (id) => {
    // console.log(`deleted task with Id: ${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    console.log("toggle", id);
  };
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deletTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
