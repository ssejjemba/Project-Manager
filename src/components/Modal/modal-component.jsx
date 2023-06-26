import { useDispatch, useSelector } from "react-redux";
import {
  selectIsModalVisible,
  selectModalFormName,
} from "../../store/modal/modal-selectors";
import "./modal-styles.css";
import { showChosenModalAction } from "../../store/modal/modal-actions";
import AddTaskForm from "../Forms/addtaskform-component";
import { MODAL_FORM_TYPES } from "../Forms/form-types";

const CustomModal = () => {
  const dispatch = useDispatch();
  const isModalSeen = useSelector(selectIsModalVisible);
  const formName = useSelector(selectModalFormName);
  const dangerLevel = "normal";

  const onClickOverlay = () => {
    dispatch(showChosenModalAction({ formName: MODAL_FORM_TYPES.EMPTY, isModalSeen: false, clickedData: {} })); // will always remove overlay
  };

  //kill body scroll when modal is seen
  document.body.classList.add(isModalSeen ? "active-modal" : "body");

  let formChoice = <div>Done</div>;
  switch(formName){
    case MODAL_FORM_TYPES.ADD_TASK:
      formChoice = <AddTaskForm />
      break;
    case MODAL_FORM_TYPES.TASK_PROGRESS:
      formChoice = <TaskProgressForm />
      break;
    default:
      formChoice = formChoice; 
      break;
  }

  return (
    <>
      {isModalSeen && (
        <>
          <div className="modal-overlay" onClick={onClickOverlay}></div>
          <div className="modal-limiter">
            <div className="modal-div">
              <div
                className={`modal-title ${
                  dangerLevel == "normal" ? "" : "text-danger"
                }`}
              >
                {formName}
              </div>
              {formChoice}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CustomModal;
