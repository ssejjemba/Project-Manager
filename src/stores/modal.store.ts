import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./root.store";

export class ModalStore {
  isAddTaskFormVisible = false;
  constructor(public rootStore: RootStore) {
    makeObservable(this, {
      isAddTaskFormVisible: observable,
      showAddTaskForm: action,
      hideAddTaskForm: action,
    });
  }

  showAddTaskForm = () => {
    this.isAddTaskFormVisible = true;
  };

  hideAddTaskForm = () => {
    this.isAddTaskFormVisible = true;
  };
}
