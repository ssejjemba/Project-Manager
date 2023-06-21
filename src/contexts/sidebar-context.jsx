import { createContext, useState } from "react";

export const SidebarContext = createContext({
    isSideBarOpen: false,
    toggleSideBar: () => {},
});

export const SidebarContextProvider = ({children}) => {
    const [isSideBarOpen, toggleSideBar] = useState(false);
    const value = {
        isSideBarOpen,
        toggleSideBar,
    }
    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}