import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <main>
      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Tasks
      </h1>

      {tasks.length > 0
        ? tasks.map((task) => (
            <Task
              task={task}
              key={task.id}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))
        : "No tasks Avialable"}
    </main>
  );
};

export default Tasks;
