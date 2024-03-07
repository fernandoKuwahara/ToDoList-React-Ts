export type id = string;

export interface TaskProp {
  id: id;
  isTaskDone: boolean;
  content: string;
  onDeleteTask: (id: string) => void;
  onDoneTask?: (id: string) => void;
}