import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
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

  const showTask = () => {
    setShowAddTask(!showAddTask);
  };
  const deletTask = (id) => {
    // console.log(`deleted task with Id: ${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000 + 1);

    const newtask = { id, ...task };
    setTasks([...tasks, newtask]);
    console.log(id);
  };

  const toggleReminder = (id, event) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
    console.log(event.detail, id);
  };

  return (
    <div className="container">
      <Header onShow={showTask} taskShow={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deletTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
