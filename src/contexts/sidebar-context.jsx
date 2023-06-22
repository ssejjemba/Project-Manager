import { createContext, useState } from "react";

const boardData = [
  {
    id: 1,
    name: "Platform Launch",
    isActive: true,
  },
];

export const SidebarContext = createContext({
  isSideBarOpen: false,
  toggleSideBar: () => {},
  boardList: boardData,
  setBoardList: () => {},
});

export const SidebarContextProvider = ({ children }) => {
  const [isSideBarOpen, toggleSideBar] = useState(false);
  const [boardList, setBoardList] = useState(boardData);

  const value = {
    isSideBarOpen,
    toggleSideBar,
    boardList,
    setBoardList,
  };
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
