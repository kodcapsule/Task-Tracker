import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setRemindr] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !day) {
      alert("Please Enter a value");
    }
    onAdd({ text, day, reminder });
    setText("");
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
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input
          type="text"
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
