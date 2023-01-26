import { FaTrashAlt } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  const clickMe = (id) => {
    console.log(id);
  };
  return (
    <article
      className={`task ${task.reminder ? "reminder" : ""}`}
      onClick={() => onToggle(task.id)}
    >
      <h3>
        {task.title}{" "}
        <small className="task_delete">
          <FaTrashAlt
            style={{ color: "red" }}
            onClick={() => onDelete(task.id)}
          />
        </small>
      </h3>
      <small>{task.day}</small>
    </article>
  );
};

export default Task;
