import { useContext } from "react";
import BoardLink from "../BoardLink/boardlink-component";

import "./addboard-styles.css";
import { SidebarContext } from "../../contexts/sidebar-context";

const AddBoardButton = (props) => {
  const { boardList, setBoardList } = useContext(SidebarContext);

  const addBoardHandler = () => {
    const newBoard = {
      id: boardList.length + 1,
      name: "Edit New Board",
      isActive: false,
    };
    const newList = boardList.concat(newBoard);
    console.log(newList);
    setBoardList(newList);
  };
  const { text, isActive, textColor } = props;

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
