import { makeObservable, observable, action, runInAction } from "mobx";
import { RootStore } from "./root.store";

export interface Task {
  id: string;
  boardId: string;
  columnId: string;
  title: string;
  description: string;
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
    });
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
    const newTask: Task = {
      id: generateUniqueId(),
      boardId,
      columnId,
      title: partialTask.title || "",
      description: partialTask.description || "",
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
