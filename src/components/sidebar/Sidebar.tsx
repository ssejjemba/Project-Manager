"use client";

import Image from "next/image";
import SideBarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import { IconsPath } from "@/constants/icons";
import Switch from "../switch/Switch";
import { useState } from "react";

export default function SideBar() {
  const [theme, setTheme] = useState("light");
  return (
    <aside className="flex flex-col h-full w-1/5 max-w-lg bg-white dark:bg-darkGrey border-r border-lightLines dark:border-darkLines">
      <SideBarHeader />
      <div className="flex h-full flex-col mr-10">
        <div className="h-20 w-full flex pl-12 items-center">
          <h4 className="text-hS uppercase text-medGray">All boards (3)</h4>
        </div>
        <div className="flex flex-grow flex-col">
          <SidebarItem id="01" text="Platform Launch" active />
          <SidebarItem id="02" text="Marketing Plan" />
          <SidebarItem id="03" text="Roadmap" />
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
            <button className="flex">
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
