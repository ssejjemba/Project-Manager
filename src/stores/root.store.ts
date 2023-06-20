import { BoardStore } from "./board.store";
import { SettingsStore } from "./settings.store";
// Import other store classes here

export class RootStore {
  private static instance: RootStore | null = null;
  settingsStore!: SettingsStore;
  boardsStore!: BoardStore;
  // Declare other store instances here

  private constructor() {
    if (RootStore.instance) {
      return RootStore.instance;
    }
    this.settingsStore = new SettingsStore(this);
    this.boardsStore = new BoardStore(this);
    // Initialize other store instances here

    RootStore.instance = this;
  }

  static getInstance(): RootStore {
    if (!RootStore.instance) {
      RootStore.instance = new RootStore();
    }
    return RootStore.instance;
  }
}

const rootStore = RootStore.getInstance();
export default rootStore;
