"use client";
import { observer } from "mobx-react-lite";
import EmptyBoard from "./EmptyBoard";
import { useStore } from "@/hooks/useStore";
import Board from "../board/Board";

function Dashboard() {
  const {
    boardsStore: { activeBoard },
  } = useStore();
  return (
    <section className="w-full flex flex-1">
      {activeBoard!.columns.length === 0 ? <EmptyBoard /> : <Board />}
    </section>
  );
}

export default observer(Dashboard);
