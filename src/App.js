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
      reminder: true,
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
      reminder: true,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
