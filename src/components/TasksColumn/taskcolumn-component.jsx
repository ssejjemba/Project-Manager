import ColumnName from "../ColumnName/columnName-component";
import TaskCard from "./taskcard-component";
import "./column-styles.css";

const TasksColumn = ({ isAdder, columnData, onTap }) => {
  const tasksList = !isAdder ? Object.keys(columnData.tasks) : [];
  return (
    <div className="column-container">
      {columnData && <ColumnName name={`${columnData.columnName} (${tasksList.length})`} circleColor={"blue"} />}
      <div className={`column-content ${columnData ? "" : "margin-top"}`}>
        {tasksList.length > 0 ? (
          tasksList.map((eachTitle, index) => (
            <TaskCard key={index} data={columnData.tasks[eachTitle]} />
          ))
        ) : isAdder ? (
          <div className="sidebar-hide">
            <button onClick={onTap}>
              <span class="material-symbols-rounded nofill">add</span>
              {""}
              <p>New Column</p>
            </button>
          </div>
        ) : (
          "Add a new Task to this Column"
        )}
      </div>
    </div>
  );
};

export default TasksColumn;
