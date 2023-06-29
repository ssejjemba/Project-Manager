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
    taskStore: {
      fetchTasks,
      isLoading,
      tasks,
      updateTask,
      getTasksByColumnId,
      moveTask,
    },
  } = useStore();
  useEffect(() => {
    fetchTasks(activeBoard?.id!);
  }, [activeBoard]);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    console.log(JSON.stringify(result, null, 2));

    moveTask(source, destination);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex w-full h-full pl-[2.4rem] pt-10 pb-20">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex gap-10 w-full h-full overflow-auto">
          {activeBoard?.columns.map((column, index) => (
            <Column
              key={column.id}
              column={column}
              tasks={getTasksByColumnId(column.id)}
              index={index}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default observer(Board);
