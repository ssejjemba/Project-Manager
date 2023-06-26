import { useDispatch, useSelector } from "react-redux";
import { selectModalClickedData} from "../../store/modal/modal-selectors";
import "./taskprogform-styles.css";
import { showChosenModalAction } from "../../store/modal/modal-actions";
import { MODAL_FORM_TYPES } from "./form-types";
import { selectBoardData } from "../../store/boardFragment/boardFrag-selectors";

// {
//         title: title
// id: taskId,
// description: description,
// subtasks: []
// completedSubtasks: []
// columnName: selectedStatus,
//       },
const TaskProgressForm = (props) => {
  const dispatch = useDispatch();
  const taskData = useSelector(selectModalClickedData);
  const { description, subtasks, columnName, completedSubtasks } = taskData;
  const boardData = useSelector(selectBoardData);
  const columns = Object.keys(boardData);

  const handleChoiceChange = (choice) => {
    let tickedTasks = [];
    if (completedSubtasks.includes(choice)) {
      tickedTasks = completedSubtasks.filter((c) => c !== choice);
    } else {
      tickedTasks = [...completedSubtasks, choice];
    }
    const newTaskData = {
      ...taskData,
      noSubmitButton: true,
      isTaskData: true,
      completedSubtasks: tickedTasks,
    };
    dispatch(
      showChosenModalAction({
        formName: MODAL_FORM_TYPES.TASK_PROGRESS,
        isModalSeen: true,
        clickedData: newTaskData,
      })
    );
  };

  const handleStatusChange = (columnName) => {
    const newTaskData = { ...taskData, columnName: columnName };
    dispatch(
      showChosenModalAction({
        formName: MODAL_FORM_TYPES.TASK_PROGRESS,
        isModalSeen: true,
        clickedData: newTaskData,
      })
    );
  };
  const submitTaskProgress = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitTaskProgress} className="progress-form">
      <div className="progress-description">{description}</div>
      <div className="progress-subtasks">
        <label htmlFor="subtasks">{`Subtasks (${completedSubtasks.length} of ${subtasks.length})`}</label>
        {subtasks.map((subtask) => (
          <div className="checkbox-div">
            <input
              type="checkbox"
              checked={completedSubtasks.includes(subtask)}
              onChange={() => handleChoiceChange(subtask)}
            />
            <span
              className={`${
                completedSubtasks.includes(subtask) ? "strikethrough" : ""
              }`}
            >
              {subtask}
            </span>
          </div>
        ))}
      </div>

      <div className="progress-status">
        <label htmlFor="status">Status</label>
        <div className="custom-select">
          <select
            id="status"
            value={columnName}
            onChange={(e) => handleStatusChange(e.target.value)}
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
