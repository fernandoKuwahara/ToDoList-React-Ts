import { FormContainer, FormHeader, TaskListContainer, TaskListContainerHeader, TaskListContainerTasks, SpanCountTask } from "../../styles/Style-Components/Form/Form";
import { Notice } from "../Notice/Notice";
import { Task } from "../Task/Task";

import { TaskProp, id } from "../../services/interfaces/Task";

import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export function Form() {
  const [tasks, setTasks] = useState<TaskProp[]>([]);
  const [taskContent, setTaskContent] = useState("");
  const [numberTasks, setNumberTasks] = useState(0);
  const [numberTasksDone, setNumberTasksDone] = useState(0);

  function handleCreateTask(e: FormEvent): void {
    e.preventDefault();

    setTasks([...tasks, { id: uuidv4(), isTaskDone: false, content: taskContent }]);

    handleCountTask();
  }

  function handleCountTask(): void {
    setNumberTasks(numberTasks + 1);

    const tasksDone = tasks.filter(task => task.isTaskDone);
    const numberDone = tasksDone.length;

    setNumberTasksDone(numberDone);
  }

  function handleNewTaskContent(e: ChangeEvent<HTMLTextAreaElement>): void {
    e.target.setCustomValidity("");
    setTaskContent(e.target.value);
  }

  function handleInvalidContentTask(e: InvalidEvent<HTMLTextAreaElement>): void {
    e.target.setCustomValidity("Este campo é obrigatório!");
  }

  function handleDeleteTask(id: id): void {
    const oldTasks = tasks.filter(task => task.id !== id);

    setTasks(oldTasks);
  }

  // function handleDoneTask(id: id): void {

  // }

  return (
    <FormContainer>
      <FormHeader>
        <form onSubmit={ handleCreateTask }>
          <textarea
            placeholder="Adicione uma nova tarefa" 
            onChange={ handleNewTaskContent }
            required
            value={ taskContent }
            onInvalid={ handleInvalidContentTask }
          />
          <button type="submit" >Criar <PlusCircle size={ 22 }/></button>
        </form>
      </FormHeader>
      <TaskListContainer>
        <TaskListContainerHeader>
          <div>
            <span>Tarefas criadas</span>
            <SpanCountTask>{ numberTasks }</SpanCountTask>
          </div>
          <div>
            <span>Concluídas</span>
            <SpanCountTask>{ numberTasksDone } de { numberTasks }</SpanCountTask>
          </div>
        </TaskListContainerHeader>
        <TaskListContainerTasks>
          {
            !tasks.length ?
              <Notice /> :
              tasks.map(task => 
                <Task
                  key={ task.id }
                  id={ task.id }
                  isTaskDone={ task.isTaskDone }
                  content={ task.content }
                  onDeleteTask={ handleDeleteTask }
                  
                />
              )
          }
        </TaskListContainerTasks>
      </TaskListContainer>
    </FormContainer>
  );
}