import { useContext } from "react";
import BoardLink from "../BoardLink/boardlink-component";

import "./addboard-styles.css";
import { useDispatch } from "react-redux";
import { showChosenModalAction } from "../../store/modal/modal-actions";
import { MODAL_FORM_TYPES } from "../Forms/form-types";

const AddBoardButton = (props) => {
  const { text, isActive, textColor } = props;
  const dispatch = useDispatch();

  const addBoardHandler = () => {
    dispatch(
      showChosenModalAction({ formName: MODAL_FORM_TYPES.ADD_BOARD, isModalSeen: true, clickedData: {} })
    );
  };

  return (
    <>
      <BoardLink
        text={text}
        isActive={isActive}
        textColor={textColor}
        onTap={addBoardHandler}
      />
    </>
  );
};

export default AddBoardButton;
