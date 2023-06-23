import { createContext, useState } from "react";

const boardData = [
  {
    id: 1,
    name: "Platform Launch",
    isActive: true,
  },
];

export const SidebarContext = createContext({
  boardList: boardData,
  setBoardList: () => {},
});

export const SidebarContextProvider = ({ children }) => {
  const [boardList, setBoardList] = useState(boardData);

  const value = {
    boardList,
  };
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
