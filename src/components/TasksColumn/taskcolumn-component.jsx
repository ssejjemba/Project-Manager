import ColumnName from "../ColumnName/columnName-component";
import "./column-styles.css";

const TasksColumn = ({isAdder, columnData, onTap}) => {
    // const {name} = columnData;
  return (
    <div className="column-container">
      {columnData && <ColumnName name={"TODO (4)"} circleColor={'blue'}/>}
      <div className={`column-content ${columnData ? '' : 'margin-top'}`}>
        {
            isAdder ? (
                <div className="sidebar-hide">
                <button onClick={onTap}>
                  <span class="material-symbols-rounded nofill">
                    add
                  </span>{""}
                  <p>New Column</p>
                </button>
              </div>  
            ): 'Add a new Task to this Column'
        }
      </div>
    </div>
  );
};

export default TasksColumn;
