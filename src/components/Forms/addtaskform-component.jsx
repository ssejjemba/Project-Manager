import { useState } from "react";
import AddButton from "../AddButton/addbutton-component";
import "./addtaskform-styles.css";
import { useDispatch, useSelector } from "react-redux";
import { selectBoardData } from "../../store/boardFragment/boardFrag-selectors";
import { addTaskAction } from "../../store/boardFragment/boardFrag-actions";

const AddTaskForm = (props) => {
  const dispatch = useDispatch();
  const boardDataMap = useSelector(selectBoardData);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtasks, setSubTasks] = useState([""]);
  const columns = Object.keys(boardDataMap);
  const [selectedStatus, setSelectedStatus] = useState(columns[0]);
  const { isUpdating } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskId = Object.keys(boardDataMap[selectedStatus].tasks).length + 1;
    const taskMap = {
      id: taskId,
      title: title,
      description: description,
      subtasks: subtasks,
      completedSubtasks: [],
      columnName: selectedStatus,
    };
    console.log(taskMap);
    dispatch(addTaskAction(boardDataMap, selectedStatus, taskMap));
  };

  const addToSubTasksList = (index, value) => {
    const newList = subtasks.concat();
    newList[index] = value;
    console.log(newList);
    setSubTasks(newList);
  };

  const addSubtaskHandler = (e) => {
    e.preventDefault();
    const newList = subtasks.concat().concat("");
    console.log(newList);
    setSubTasks(newList);
  };

  const removeSubTask = (index) => {
    let newList = subtasks.concat();
    newList = [...newList.slice(0, index), ...newList.slice(index + 1)];
    setSubTasks(newList);
  };
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
        <label htmlFor="subtasks">Subtasks</label>
        {subtasks.map((element, index) => {
          return (
            <div className="subtask-div">
              <input
                type="text"
                placeholder="e.g Make Coffee"
                id="subtasks"
                value={element}
                onChange={(e) => addToSubTasksList(index, e.target.value)}
              />
              <span
                class="material-symbols-rounded"
                onClick={() => removeSubTask(index)}
              >
                close
              </span>
            </div>
          );
        })}

        {/* <input
          type="text"
          id="subtasks"
          value={subtask}
          onChange={(e) => addToSubTasksList(e.target.value)}
        /> */}
      </div>
      <AddButton
        text={"+ Add New Subtask"}
        button_type={"add-subtask"}
        onTap={addSubtaskHandler}
      />

      <div className="addtask-status">
        <label htmlFor="status">Status</label>
        <div className="custom-select">
          <select
            id="status"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            {columns.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
        </div>
      </div>

      <AddButton
        text={`${isUpdating ? 'Save Changes':'Create New Task'}`}
        button_type={"add-subtask purple"}
        type={"submit"}
      />
    </form>
  );
};

export default AddTaskForm;
