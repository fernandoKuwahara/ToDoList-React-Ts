export type id = string;

export interface TaskContainerProp {
  isChecked: boolean;
}

export interface TaskProp {
  id: id;
  isTaskDone: boolean;
  content: string;
}

export interface TaskComponentProp extends TaskProp {
  onDeleteTask: (id: string) => void;
  onDoneTask: (id: string, status: boolean) => void;
}