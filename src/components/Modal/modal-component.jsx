import { useDispatch, useSelector } from "react-redux";
import {
  selectIsModalVisible,
  selectModalFormName,
} from "../../store/modal/modal-selectors";
import "./modal-styles.css";
import { showChosenModalAction } from "../../store/modal/modal-actions";

const CustomModal = () => {
  const dispatch = useDispatch();
  const isModalSeen = useSelector(selectIsModalVisible);
  const formName = useSelector(selectModalFormName);
  const dangerLevel = "normal";
  const onClickOverlay = () => {
    dispatch(showChosenModalAction({ formName: "", isModalSeen: false })); // will always remove overlay
  };
  return (
    <>
      {isModalSeen && (
        <div className="modal-overlay" onClick={onClickOverlay}>
          <div className="modal-div">
            <div
              className={`modal-title ${
                dangerLevel == "normal" ? "" : "text-danger"
              }`}
            >
              {formName}
            </div>
            {}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
