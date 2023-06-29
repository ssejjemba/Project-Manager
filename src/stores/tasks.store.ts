import {
  makeObservable,
  observable,
  action,
  runInAction,
  computed,
} from "mobx";
import { RootStore } from "./root.store";
import { DraggableLocation } from "react-beautiful-dnd";

export interface Task {
  id: string;
  boardId: string;
  columnId: string;
  title: string;
  description: string;
  order: number;
  meta: {
    date: string;
    author: string;
  };
  subtasks: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  comments: {
    id: string;
    text: string;
    author: string;
    date: string;
  }[];
}

interface PartialTask {
  id?: string;
  boardId?: string;
  columnId?: string;
  title?: string;
  description?: string;
  order?: number;
  meta?: {
    date: string;
    author: string;
  };
  subtasks?: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  comments?: {
    id: string;
    text: string;
    author: string;
    date: string;
  }[];
}

export class TaskStore {
  tasks: Task[] = [];
  isLoading: boolean = false;

  constructor(public rootStore: RootStore) {
    makeObservable(this, {
      tasks: observable,
      isLoading: observable,
      fetchTasks: action,
      createTask: action,
      updateTask: action,
      deleteTask: action,
      getTasksByColumnId: computed,
      moveTask: action,
    });
  }

  get getTasksByColumnId(): (columnId: string) => Task[] {
    return (columnId: string) => {
      return this.tasks
        .filter((task) => task.columnId === columnId)
        .sort((a, b) => a.order - b.order);
    };
  }

  fetchTasks = async (boardId: string): Promise<void> => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      // Simulate fetching tasks from the backend server
      const response = await fetch(`/api/boards/${boardId}/tasks`);
      const data = await response.json();

      runInAction(() => {
        this.tasks = data.tasks;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        // Handle error
      });
    }
  };

  createTask = (
    boardId: string,
    columnId: string,
    partialTask: PartialTask = {}
  ): void => {
    const board = this.rootStore.boardsStore.boards.find(
      (board) => board.id === boardId
    );
    if (!board) {
      console.error("Board not found");
      return;
    }

    const column = board.columns.find((column) => column.id === columnId);
    if (!column) {
      console.error("Column not found");
      return;
    }

    const tasksInColumn = this.tasks.filter(
      (task) => task.columnId === columnId
    );
    const order = tasksInColumn.length + 1;
    const newTask: Task = {
      id: generateUniqueId(),
      boardId,
      columnId,
      title: partialTask.title || "",
      description: partialTask.description || "",
      order,
      meta: {
        date: partialTask.meta?.date || "",
        author: partialTask.meta?.author || "",
      },
      subtasks: partialTask.subtasks || [],
      comments: partialTask.comments || [],
    };

    // Simulate creating the task on the backend server
    // ...

    runInAction(() => {
      this.tasks.push(newTask);
    });
  };

  moveTask = (
    source: DraggableLocation,
    destination: DraggableLocation
  ): void => {
    const { index: sourceIndex, droppableId: sourceColumnId } = source;
    const { index: destIndex, droppableId: destColumnId } = destination;

    if (sourceColumnId === destColumnId && sourceIndex === destIndex) {
      return; // No change in position
    }

    const sourceColumn = this.rootStore.boardsStore.activeBoard!.columns.find(
      (column) => column.id === sourceColumnId
    );
    const destColumn = this.rootStore.boardsStore.activeBoard!.columns.find(
      (column) => column.id === destColumnId
    );

    if (!sourceColumn || !destColumn) {
      console.error("Invalid source or destination column");
      return;
    }

    runInAction(() => {
      const movedTask = this.tasks.find(
        (task) =>
          task.columnId === sourceColumnId && task.order === sourceIndex + 1
      );

      if (!movedTask) {
        console.error("Invalid moved task");
        return;
      }

      // Update the columnId and order of the moved task
      movedTask.columnId = destColumnId;
      // movedTask.order = destIndex + 1;

      if (sourceColumn === destColumn) {
        // Move within the same column
        this.reorderTasksWithinColumn(destColumnId);
      } else {
        // Move across columns
        this.reorderTasksAcrossColumns(source, destination);
      }
    });
  };

  reorderTasksWithinColumn = (columnId: string): void => {
    const tasksInColumn = this.tasks.filter(
      (task) => task.columnId === columnId
    );
    const sortedTasks = tasksInColumn.slice().sort((a, b) => a.order - b.order);

    sortedTasks.forEach((task, index) => {
      if (task.order !== index + 1) {
        // Update the order of the task
        task.order = index + 1;
        this.updateTask(task);
      }
    });
  };

  reorderTasksAcrossColumns = (
    source: DraggableLocation,
    destination: DraggableLocation
  ): void => {
    const { index: sourceIndex, droppableId: sourceColumnId } = source;
    const { index: destIndex, droppableId: destColumnId } = destination;

    const sortedSourceTasks = this.getTasksByColumnId(sourceColumnId);

    const sortedDestTasks = this.getTasksByColumnId(destColumnId);

    const [taskToMove] = sortedSourceTasks.splice(sourceIndex, 1);
    sortedDestTasks.splice(destIndex, 0, taskToMove);

    sortedDestTasks.forEach((task, index) => {
      if (task) {
        console.log(
          `destination swapping tasks:: ${task.title} to order ${index + 1}`
        );
        // Update the order of the task
        task.order = index + 1;
        this.updateTask(task);
      } else {
        console.error(task);
      }
    });

    sortedSourceTasks.forEach((task, index) => {
      if (task) {
        // Update the order of the task
        console.log(
          `source swapping tasks:: ${task.title} to order ${index + 1}`
        );
        task.order = index + 1;
        this.updateTask(task);
      } else {
        console.error(task);
      }
    });
  };

  updateTask = (updatedTask: PartialTask): void => {
    const taskId = updatedTask.id;
    if (!taskId) {
      console.error("Task ID is required for updating a task.");
      return;
    }

    const existingTask = this.tasks.find((task) => task.id === taskId);
    if (!existingTask) {
      console.error(`Task with ID ${taskId} does not exist.`);
      return;
    }

    const updatedFields: Partial<Task> = {
      title: updatedTask.title || existingTask.title,
      description: updatedTask.description || existingTask.description,
      meta: {
        date: updatedTask.meta?.date || existingTask.meta.date,
        author: updatedTask.meta?.author || existingTask.meta.author,
      },
      subtasks: updatedTask.subtasks || existingTask.subtasks,
      comments: updatedTask.comments || existingTask.comments,
    };

    const updatedTaskObject: Task = {
      ...existingTask,
      ...updatedFields,
    };

    // Simulate updating the task on the backend server
    // ...

    runInAction(() => {
      const index = this.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        this.tasks[index] = updatedTaskObject;
      }
    });
  };

  deleteTask = (taskId: string): void => {
    // Simulate deleting the task on the backend server
    // ...

    runInAction(() => {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    });
  };
}

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}
