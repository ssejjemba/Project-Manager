import { useDispatch, useSelector } from "react-redux";
import {
  selectIsModalVisible,
  selectModalClickedData,
  selectModalFormName,
} from "../../store/modal/modal-selectors";
import "./modal-styles.css";
import { showChosenModalAction } from "../../store/modal/modal-actions";
import AddTaskForm from "../Forms/addtaskform-component";
import { MODAL_FORM_TYPES } from "../Forms/form-types";
import TaskProgressForm from "../Forms/taskprogform-component";
import { selectBoardData } from "../../store/boardFragment/boardFrag-selectors";
import { editTaskProgressAction } from "../../store/boardFragment/boardFrag-actions";
import { useState } from "react";

const CustomModal = () => {
  const dispatch = useDispatch();
  const isModalSeen = useSelector(selectIsModalVisible);
  const formName = useSelector(selectModalFormName);
  const modalData = useSelector(selectModalClickedData);
  const boardData = useSelector(selectBoardData);
  const [isOptionsClicked, setIsOptionsClicked] = useState(false);
  const dangerLevel = "normal";
  let hasActions = false;

  const onClickOverlay = () => {
    if (modalData.noSubmitButton && modalData.isTaskData) {
      //Form had no submit button
      console.log(boardData);
      dispatch(editTaskProgressAction(boardData, modalData));
    }
    dispatch(
      showChosenModalAction({
        formName: MODAL_FORM_TYPES.EMPTY,
        isModalSeen: false,
        clickedData: {},
      })
    ); // will always remove overlay
  };

  const onClickEditTask = () => {
    dispatch(
      showChosenModalAction({
        formName: MODAL_FORM_TYPES.EDIT_TASK,
        isModalSeen: true,
        clickedData: modalData,
      })
    );
  };

  //kill body scroll when modal is seen
  document.body.classList.add(isModalSeen ? "active-modal" : "body");

  let formChoice = <div>Done</div>;
  switch (formName) {
    case MODAL_FORM_TYPES.ADD_TASK:
      formChoice = <AddTaskForm />;
      break;
    case MODAL_FORM_TYPES.TASK_PROGRESS:
      formChoice = <TaskProgressForm />;
      hasActions = true;
      break;
    case MODAL_FORM_TYPES.EDIT_TASK:
      formChoice = <AddTaskForm isUpdating={true}/>;
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
                {hasActions ? (
                  <span className="modal-options" onClick={() => setIsOptionsClicked(!isOptionsClicked)}>
                    ellipsis
                    {
                      isOptionsClicked && (
                      <div className="modal-dialogbox">
                        <div className="edititem-div" onClick={onClickEditTask}>Edit Task</div>
                        <div className="deleteitems-div">Delete Task</div>
                      </div>
                    )}
                  </span>
                ) : (
                  <></>
                )}
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
