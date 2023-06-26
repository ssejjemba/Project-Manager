import { useDispatch, useSelector } from "react-redux";
import {
  selectIsModalVisible,
  selectModalFormName,
} from "../../store/modal/modal-selectors";
import "./modal-styles.css";
import { showChosenModalAction } from "../../store/modal/modal-actions";
import AddTaskForm from "../Forms/addtaskform-component";

const CustomModal = () => {
  const dispatch = useDispatch();
  const isModalSeen = useSelector(selectIsModalVisible);
  const formName = useSelector(selectModalFormName);
  const dangerLevel = "normal";

  const onClickOverlay = () => {
    dispatch(showChosenModalAction({ formName: "", isModalSeen: false })); // will always remove overlay
  };

  //kill body scroll when modal is seen
  document.body.classList.add(isModalSeen ? "active-modal" : "body");

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
              <AddTaskForm />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CustomModal;
