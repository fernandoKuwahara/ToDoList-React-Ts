import { TaskContainer } from "../../styles/Style-Components/Task/Task";
import { CheckBox } from "../Checkbox/Checkbox";
import { TaskComponentProp } from "../../services/interfaces/Task";

import { Trash } from "phosphor-react";

export function Task({ id, isTaskDone, content, onDeleteTask, onDoneTask }: TaskComponentProp) {

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleDoneTask(status: boolean) {
    onDoneTask(id, status);
  }

  return (
    <TaskContainer isChecked={ isTaskDone }>
      <CheckBox isChecked={ isTaskDone } onDoneTask={ handleDoneTask } />
      <span>{ content }</span >
      <button onClick={ handleDeleteTask }> <Trash size={ 20 } /> </button>
    </TaskContainer>
  );
}