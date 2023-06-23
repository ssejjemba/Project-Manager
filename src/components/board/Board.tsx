import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Loading from "../loading/Loading";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import Column from "../columns/Column";

function Board() {
  const {
    boardsStore: { activeBoard },
    taskStore: { fetchTasks, isLoading, tasks, updateTask },
  } = useStore();
  useEffect(() => {
    fetchTasks(activeBoard?.id!);
  }, [activeBoard]);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      const task = tasks.find((task) => task.id === result.draggableId);
      if (task) {
        updateTask({ ...task, columnId: destination.droppableId });
      }
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex w-full h-full pl-[2.4rem] pt-10 pb-20">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={activeBoard?.id!}>
          {(provided) => (
            <div
              className="flex gap-10 w-full h-full overflow-auto"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {activeBoard?.columns.map((column, index) => (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks.filter((task) => task.columnId === column.id)}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default observer(Board);
