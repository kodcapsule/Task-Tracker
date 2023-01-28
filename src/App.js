import { useState, useEffect } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchtask = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      setTasks(data);
      // console.log(data);
    };
    fetchtask();
  }, []);

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
