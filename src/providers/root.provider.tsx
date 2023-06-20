"use client";
import React, { ReactNode, createContext } from "react";
import { RootStore } from "../stores/root.store";

// Create the context
export const RootStoreContext = createContext<RootStore | null>(null);

// Provider component
interface RootStoreProviderProps {
  children: ReactNode;
}

// Provider component
export const RootStoreProvider = ({ children }: RootStoreProviderProps) => {
  return (
    <RootStoreContext.Provider value={RootStore.getInstance()}>
      {children}
    </RootStoreContext.Provider>
  );
};
