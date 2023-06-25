import { useContext } from "react";
import AddButton from "../../components/AddButton/addbutton-component";
import "./board-frag-styles.css";
import { SidebarContext } from "../../contexts/sidebar-context";
import { useDispatch, useSelector } from "react-redux";
import { selectBoardData } from "../../store/boardFragment/boardFrag-selectors";
import TasksColumn from "../../components/TasksColumn/taskcolumn-component";
import { addColumnAction } from "../../store/boardFragment/boardFrag-actions";
import { selectIsSideBarOpen } from "../../store/appState/appState-selectors";

const BoardFragment = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(selectIsSideBarOpen);
  const boardDataList = useSelector(selectBoardData);

  const onClickAddColumn = () => {
    dispatch(addColumnAction(boardDataList));
  };
  return (
    <div
      className={`fragment-container ${isSideBarOpen ? "sidebar-open" : ""} ${
        boardDataList == 0 ? "add-flex" : ""
      }`}
    >
      {boardDataList.length > 0 ? (
        boardDataList.map((eachColumn) => (
          <TasksColumn key={eachColumn.id} columnData={eachColumn} />
        ))
      ) : (
        <div className="centered-info">
          <p>This board is empty. Create a new column to get started.</p>
          <AddButton
            text={`+ Add New Column`}
            onTap={onClickAddColumn}
            button_type={"addbutton"}
          />
        </div>
      )}
      {boardDataList.length > 0 && (
        <TasksColumn isAdder={true} onTap={onClickAddColumn} />
      )}
    </div>
  );
};

export default BoardFragment;
