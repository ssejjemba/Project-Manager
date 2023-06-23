import { useContext } from "react";
import BoardLink from "../BoardLink/boardlink-component";

import "./addboard-styles.css";
import { useDispatch } from "react-redux";
import { showChosenModalAction } from "../../store/modal/modal-actions";

const AddBoardButton = (props) => {
  const { text, isActive, textColor } = props;
  const dispatch = useDispatch();

  const addBoardHandler = () => {
    dispatch(
      showChosenModalAction({ formName: "Add New Board", isModalSeen: true })
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
