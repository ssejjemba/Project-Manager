import { Task as T } from "@/stores/tasks.store";
import { Droppable } from "react-beautiful-dnd";
import Task from "../task/Task";

interface ColumnProps {
  column: Column;
  tasks: T[];
  index: number;
}

const Column: React.FC<ColumnProps> = ({ column, tasks, index }) => {
  return (
    <div className="w-[28rem] flex-shrink-0 h-full">
      <h3 className="text-hS text-medGray flex items-center">
        <span
          style={{ background: `${column.color}` }}
          className={`w-6 h-6 rounded-full mr-5 inline-block`}
        />
        {`${column.name} (${tasks.length})`}
      </h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="mt-10 w-full h-full flex flex-col gap-10"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
