import AddButton from "../../components/AddButton/addbutton-component";
import "./board-frag-styles.css";
import { useDispatch, useSelector } from "react-redux";
import { selectBoardData } from "../../store/boardFragment/boardFrag-selectors";
import TasksColumn from "../../components/TasksColumn/taskcolumn-component";
import { addColumnAction } from "../../store/boardFragment/boardFrag-actions";
import { selectIsSideBarOpen } from "../../store/appState/appState-selectors";

const BoardFragment = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(selectIsSideBarOpen);
  const boardDataMap = useSelector(selectBoardData);
  const boardDataLength = Object.keys(boardDataMap).length;

  const onClickAddColumn = () => {
    dispatch(addColumnAction(boardDataMap));
  };

  return (
    <div
      className={`fragment-container ${isSideBarOpen ? "sidebar-open" : ""} ${
        boardDataLength == 0 ? "add-flex" : ""
      }`}
    >
      {boardDataLength > 0 ? (
        Object.keys(boardDataMap).map((eachColumn) => (
          <TasksColumn
            key={boardDataMap[eachColumn].id}
            columnData={boardDataMap[eachColumn]}
          />
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
      {boardDataLength > 0 && (
        <TasksColumn isAdder={true} onTap={onClickAddColumn} />
      )}
    </div>
  );
};

export default BoardFragment;
