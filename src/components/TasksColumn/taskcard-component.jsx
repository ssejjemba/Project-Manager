import "./taskcard-styles.css";
const TaskCard = (props) => {
    const {title, subtasks} = props.data
    console.log(title)
    return (
        <div className="taskcard-div">
            <div className="taskcard-title">{title}</div>
            <div className="taskcard-meta">{`0 out of ${subtasks.length} subtasks`}</div>
        </div>
    )
};

export default TaskCard;
