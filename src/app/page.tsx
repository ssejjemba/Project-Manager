"use client";
import Dashboard from "@/components/dashboard/Dashboard";
import AddTask from "@/components/forms/AddTask";
import Header from "@/components/header/Header";
import Loading from "@/components/loading/Loading";
import SideBar from "@/components/sidebar/Sidebar";
import SidebarControl from "@/components/sidebar/SidebarControl";
import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("../../mocks").then(({ initMocks }) => {
    initMocks();
  });
}

function Home() {
  const {
    boardsStore,
    settingsStore: {
      settings: { theme },
    },
  } = useStore();
  const { isLoading } = boardsStore;
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
      import("../../mocks").then(({ initMocks }) => {
        initMocks().then(() => {
          boardsStore.fetchBoards();
        });
      });
    } else {
      boardsStore.fetchBoards();
    }
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={`h-screen w-screen flex ${theme === "dark" ? "dark" : ""}`}>
      <SideBar />
      <SidebarControl />
      <main className="flex flex-grow flex-col min-w-0 h-full bg-lightBg dark:bg-darkBg">
        <Header />
        <Dashboard />
      </main>
      <AddTask />
    </div>
  );
}

export default observer(Home);
