"use client";
import { useContext } from "react";
import { RootStore } from "../stores/root.store";
import { RootStoreContext } from "../providers/root.provider";

export const useStore = (): RootStore => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error("useStore must be used within a RootStoreProvider");
  }
  return store;
};
