"use client";

import Image from "next/image";
import SideBarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import { IconsPath } from "@/constants/icons";
import Switch from "../switch/Switch";
import { observer } from "mobx-react-lite";
import { useStore } from "@/hooks/useStore";

function SideBar() {
  const { settingsStore, boardsStore } = useStore();
  const { boards, activeBoardId, setActiveBoard } = boardsStore;
  const {
    settings: { theme, isSideBarShown },
    setTheme,
    hideSideBar,
  } = settingsStore;
  return (
    <aside
      className={`flex flex-col h-full max-w-lg bg-white dark:bg-darkGrey border-r border-lightLines dark:border-darkLines ${
        isSideBarShown
          ? "w-1/5 opacity-1 min-w-[28rem] visible"
          : "w-0 opacity-0 min-w-0 pointer-events-none border-r-0 invisible"
      }`}
      style={{
        transition: !isSideBarShown
          ? "width 0.8s cubic-bezier(0.165, 0.84, 0.44, 1),  min-width 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.5s cubic-bezier(0.000, 1.355, 0.010, 0.805), visibility 0.8s"
          : "width 0.8s cubic-bezier(0.165, 0.84, 0.44, 1),  min-width 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.5s cubic-bezier(0.955, 0.070, 1.000, -0.200), visibility 0.2s",
      }}
    >
      <SideBarHeader />
      <div className="flex h-full flex-col mr-10">
        <div className="h-20 w-full flex pl-12 items-center">
          <h4 className="text-hS uppercase text-medGray">{`All boards (${boards.length})`}</h4>
        </div>
        <div className="flex flex-grow flex-col">
          {boards.map((board) => {
            return (
              <SidebarItem
                key={board.id}
                id={board.id}
                text={board.name}
                active={activeBoardId === board.id}
                onClick={() => setActiveBoard(board.id)}
              />
            );
          })}
          <div
            style={{ borderRadius: "0px 100px 100px 0px" }}
            className={`h-20 flex pl-12  items-center cursor-pointer [&:not(:first-child)]:mt-1`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className={`fill-purple`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={IconsPath.PROJECT}
              />
            </svg>
            <h3 className={`text-hM text-purple ml-6`}>+ Create New Board</h3>
          </div>
        </div>
        <div className="px-12 h-56">
          <div className="flex justify-center items-center bg-lightBg dark:bg-darkBg h-20 w-full rounded-lg">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              className="fill-medGray mr-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd" d={IconsPath.SUN} />
            </svg>
            <Switch
              id="theme_switch"
              onChange={() => setTheme(theme === "light" ? "dark" : "light")}
              checked={theme === "dark"}
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="fill-medGray ml-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd" d={IconsPath.MOON} />
            </svg>
          </div>
          <div className="flex items-center h-20 w-full">
            <button onClick={hideSideBar} className="flex">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                className="fill-medGray mr-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={IconsPath.EYE_HIDDEN}
                />
              </svg>
              <span className="text-hM text-medGray">Hide Sidebar</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default observer(SideBar);
