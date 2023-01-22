import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <main>
      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        main tasks
      </h1>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </main>
  );
};

export default Tasks;
