import { useDispatch } from "react-redux";
import "./taskcard-styles.css";
import { MODAL_FORM_TYPES } from "../Forms/form-types";
import { showChosenModalAction } from "../../store/modal/modal-actions";

const TaskCard = (props) => {
  const dispatch = useDispatch();
  const { title, subtasks } = props.data;

  const onClickTaskCard = (taskData) => {
    dispatch(showChosenModalAction({ formName: MODAL_FORM_TYPES.TASK_PROGRESS, isModalSeen: true, clickedData: taskData }));
  };
  return (
    <div className="taskcard-div" onClick={() => onClickTaskCard(props.data)}>
      <div className="taskcard-title">{title}</div>
      <div className="taskcard-meta">{`0 out of ${subtasks.length} subtasks`}</div>
    </div>
  );
};

export default TaskCard;
