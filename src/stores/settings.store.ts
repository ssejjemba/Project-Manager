import { makeObservable, observable, action } from "mobx";
import { LocalStorage } from "../modules/storage/local";
import { RootStore } from "./root.store";

type Theme = "light" | "dark";

interface Settings {
  theme: Theme;
  activeBoardId: string | null;
  isSideBarShown: boolean;
  // Add more settings properties here
}

export class SettingsStore {
  settings: Settings = {
    theme: "light",
    activeBoardId: null,
    isSideBarShown: true,
    // Initialize other settings properties here
  };

  constructor(public rootStore: RootStore) {
    makeObservable(this, {
      settings: observable,
      setTheme: action,
      saveActiveBoardId: action,
      showSideBar: action,
      hideSideBar: action,
    });
    this.loadSettings();
  }

  setTheme = (theme: Theme): void => {
    this.settings.theme = theme;
    this.saveSettings();
  };

  showSideBar = () => {
    this.settings.isSideBarShown = true;
    this.saveSettings();
  };

  hideSideBar = () => {
    this.settings.isSideBarShown = false;
    this.saveSettings();
  };

  saveActiveBoardId = (boardId: string): void => {
    this.settings.activeBoardId = boardId;
    this.saveSettings();
  };

  // Add more action methods for other settings properties here

  private loadSettings(): void {
    const savedSettings = LocalStorage.getItem("settings");
    if (savedSettings) {
      this.settings = JSON.parse(savedSettings);
    }
  }

  private saveSettings(): void {
    LocalStorage.setItem("settings", JSON.stringify(this.settings));
  }
}
