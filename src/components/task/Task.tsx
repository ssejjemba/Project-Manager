import { Task as T } from "@/stores/tasks.store";
import { Draggable } from "react-beautiful-dnd";

interface TaskProps {
  task: T;
  index: number;
}

const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="bg-white dark:bg-darkGrey w-full h-[8.8rem] px-7 py-[2.3rem] rounded-xl shadow group"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4 className="text-hM text-black dark:text-white mb-3 group-hover:text-purple">
            {task.title}
          </h4>
          <p className="text-bM text-medGray">{getSubtaskStatus(task)}</p>
        </div>
      )}
    </Draggable>
  );
};

function getSubtaskStatus(task: T): string {
  const totalSubtasks = task.subtasks.length;
  const completedSubtasks = task.subtasks.filter(
    (subtask) => subtask.completed
  ).length;

  return `${completedSubtasks} of ${totalSubtasks} subtasks`;
}

export default Task;
