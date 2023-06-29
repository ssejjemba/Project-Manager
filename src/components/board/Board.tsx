import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Loading from "../loading/Loading";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "../columns/Column";

function Board() {
  const {
    boardsStore: { activeBoard },
    taskStore: { fetchTasks, isLoading, getTasksByColumnId, moveTask },
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
          <button className="h-full mt-14 mr-10 w-[28rem] flex-shrink-0 text-hXL text-medGray rounded-[6px] bg-[linear-gradient(180deg,_#E9EFFA_0%,_rgba(233,_239,_250,_0.50)_100%)] dark:bg-[linear-gradient(180deg,_rgba(43,_44,_55,_0.25)_0%,_rgba(43,_44,_55,_0.13)_100%)]">
            + New Column
          </button>
        </div>
      </DragDropContext>
    </div>
  );
}

export default observer(Board);
