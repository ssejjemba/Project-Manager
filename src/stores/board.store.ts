import { makeObservable, observable, action, runInAction } from "mobx";
import { RootStore } from "./root.store";

interface Board {
  id: string;
  name: string;
  columns: Column[];
}

interface Column {
  id: string;
  name: string;
  color: string;
}

export class BoardStore {
  boards: Board[] = [];
  activeBoardId: string | null = null;
  isLoading: boolean = false;

  constructor(public rootStore: RootStore) {
    makeObservable(this, {
      boards: observable,
      activeBoardId: observable,
      isLoading: observable,
      fetchBoards: action,
      setActiveBoard: action,
      renameBoard: action,
      removeColumn: action,
    });
  }

  async fetchBoards(): Promise<void> {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      // Simulate fetching boards from the backend server
      const response = await fetch("/api/boards");
      const data = await response.json();

      runInAction(() => {
        this.boards = data.boards;
        this.isLoading = false;

        const activeBoardId =
          this.rootStore.settingsStore.settings.activeBoardId;
        const activeBoardExists = this.boards.some(
          (board) => board.id === activeBoardId
        );
        if (!activeBoardExists && this.boards.length > 0) {
          this.setActiveBoard(this.boards[0].id);
        } else if (activeBoardExists) {
          this.setActiveBoard(activeBoardId!);
        }
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        // Handle error
      });
    }
  }

  setActiveBoard(boardId: string): void {
    this.activeBoardId = boardId;
  }

  renameBoard(boardId: string, newName: string): void {
    const board = this.boards.find((b) => b.id === boardId);
    if (board) {
      board.name = newName;
      // Update the backend server with the new name
      this.syncBoardChanges(board);
    }
  }

  removeColumn(boardId: string, columnId: string): void {
    const board = this.boards.find((b) => b.id === boardId);
    if (board) {
      board.columns = board.columns.filter((column) => column.id !== columnId);
      // Update the backend server with the updated columns
      this.syncBoardChanges(board);
    }
  }

  private syncBoardChanges(board: Board): void {
    // Simulate synchronization with the backend server
    // Send the updated board data to the server
    console.log("Syncing board changes with the server:", board);
  }
}
