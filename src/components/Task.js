import { FaTrash } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  const clickMe = (id) => {
    console.log(id);
  };
  return (
    <article className="task" onClick={() => onToggle(task.id)}>
      <h3>
        {task.title}{" "}
        <FaTrash style={{ color: "red" }} onClick={() => onDelete(task.id)} />
      </h3>
      <small>{task.day}</small>
    </article>
  );
};

export default Task;
