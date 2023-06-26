import { useSelector } from "react-redux";
import { selectModalClickedData } from "../../store/modal/modal-selectors";
import { useState } from "react";
import './taskprogform-styles.css'

// {
    //         title: title
            // id: taskId,
            // description: description,
            // subtasks: []
            // columnName: selectedStatus,
    //       },
const TaskProgressForm = (props) => {
  const taskData = useSelector(selectModalClickedData);
  const { title, description, subtasks, columnName } = taskData;
  const columns = ["Todo", "Doing", "Done"];
  const [status, setStatus] = useState(columnName);

  const submitTaskProgress = (e) => {
    e.preventDefault();
  };

  const handleCheckBoxes = () => {}
  return (
    <form onSubmit={submitTaskProgress} className="progress-form">
      <div className="progress-description">{description}</div>
      <div className="progress-subtasks">
        <label htmlFor="subtasks">{`Subtasks (2 of 3)`}
        {subtasks.map((subtask) => (
          <div className="checkbox-div">
            <input 
            type="checkbox"
            checked={true}
            onChange={()=>handleCheckBoxes}
            />
            <span>{subtask}</span>
          </div>

        ))}</label>
      </div>

      <div className="progress-status">
        <label htmlFor="status">Status</label>
        <div className="custom-select">
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {columns.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
};

export default TaskProgressForm;
