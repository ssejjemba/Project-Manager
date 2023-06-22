import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Loading from "../loading/Loading";

function Board() {
  const {
    boardsStore: { activeBoard },
    taskStore: { fetchTasks, isLoading },
  } = useStore();
  useEffect(() => {
    fetchTasks(activeBoard?.id!);
  }, [activeBoard]);

  if (isLoading) {
    return <Loading />;
  }

  return <div>This is a board</div>;
}

export default observer(Board);
