import { FaTrash } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <article className="task">
      <h3>
        {task.title} <FaTrash style={{ color: "red" }} />
      </h3>
      <small>{task.day}</small>
    </article>
  );
};

export default Task;
