import { TaskContainer } from "../../styles/Style-Components/Task/Task";
import { CheckBox } from "../Checkbox/Checkbox";
import { TaskProp } from "../../services/interfaces/Task";

import { Trash } from "phosphor-react";

export function Task({ id, isTaskDone, content, onDeleteTask }: TaskProp) {

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <TaskContainer>
      <CheckBox isChecked={ isTaskDone } />
      <span>{ content }</span >
      <button onClick={ handleDeleteTask }> <Trash size={ 20 } /> </button>
    </TaskContainer>
  );
}