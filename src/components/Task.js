import React from "react";

const Task = ({ task }) => {
  return (
    <article className="task">
      <h3>{task.title}</h3>
      <small>{task.day}</small>
    </article>
  );
};

export default Task;
