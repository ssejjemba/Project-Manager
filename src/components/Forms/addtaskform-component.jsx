import { useState } from "react";
import AddButton from "../AddButton/addbutton-component";
import "./addtaskform-styles.css";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtask, setSubTask] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);
  };

  const addToSubTasks = (value) => value;

  return (
    <form onSubmit={handleSubmit} className="addtask-form">
      <div className="addtask-title">
        <label htmlFor="title">Title</label>
        <input
          placeholder="e.g Take Coffee break"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="addtask-description">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="addtask-subtasks">
        <label htmlFor="subtask">Subtasks</label>
        <input
          type="text"
          id="subtask"
          value={subtask}
          onChange={(e) => addToSubTasks(e.target.value)}
        />
        <input
          type="text"
          id="subtask"
          value={subtask}
          onChange={(e) => addToSubTasks(e.target.value)}
        />
      </div>
      <AddButton text={"+ Add New Subtask"} button_type={"add-subtask"} />

      <div className="addtask-status">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">Select a status</option>
          <option value="status1">ToDos</option>
          <option value="">Select a status</option>
          <option value="">Select a status</option>
          <option value="">Select a status</option>
        </select>
      </div>

      <AddButton
        text={"Create New Task"}
        button_type={"add-subtask purple"}
        type={"submit"}
      />
    </form>
  );
};

export default AddTaskForm;
