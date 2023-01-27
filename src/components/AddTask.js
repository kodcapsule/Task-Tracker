import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setRemindr] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !day) {
      alert("Please Enter a value");
    }
    onAdd({ title, day, reminder });
    setTitle("");
    setDay("");
    setRemindr(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add task "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input
          type="date"
          placeholder="Day and Time "
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor=""> Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setRemindr(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
