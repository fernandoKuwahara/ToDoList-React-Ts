import { FormContainer, FormHeader, TaskListContainer, TaskListContainerHeader, TaskListContainerTasks, SpanCountTask } from "../../styles/Style-Components/Form/Form";
import { Notice } from "../Notice/Notice";
import { Task } from "../Task/Task";

import { TaskProp, id } from "../../services/interfaces/Task";

import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from "react";

export function Form() {
  const [tasks, setTasks] = useState<TaskProp[]>([]);
  const [taskContent, setTaskContent] = useState("");
  const [numberTasks, setNumberTasks] = useState(0);
  const [numberTasksDone, setNumberTasksDone] = useState(0);

  useEffect(() => {
    handleCountTaskDones(tasks);
  }, [tasks]);

  function handleCreateTask(e: FormEvent): void {
    e.preventDefault();

    setTasks([...tasks, { id: uuidv4(), isTaskDone: false, content: taskContent }]);

    setNumberTasks(numberTasks + 1);
    setTaskContent("");
  }

  function handleDeleteTask(id: id): void {
    setTasks(tasks => tasks.filter(task => task.id !== id));
    setNumberTasks(numberTasks - 1);
  }

  function handleCountTaskDones(tasks: TaskProp[]): void {
    const tasksDone = tasks.filter(task => {
      return task.isTaskDone !== false;
    });

    setNumberTasksDone(tasksDone.length);
  }

  function handleDoneTask(id: string, status: boolean): void {
    setTasks(tasks => tasks.map(task => (task.id === id ? { ...task, isTaskDone: status } : task)));
  }

  function handleNewTaskContent(e: ChangeEvent<HTMLTextAreaElement>): void {
    e.target.setCustomValidity("");
    setTaskContent(e.target.value);
  }

  function handleInvalidContentTask(e: InvalidEvent<HTMLTextAreaElement>): void {
    e.target.setCustomValidity("Este campo é obrigatório!");
  }

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
                  onDoneTask={ handleDoneTask }
                />
              )
          }
        </TaskListContainerTasks>
      </TaskListContainer>
    </FormContainer>
  );
}