import { FormContainer, FormHeader, TaskListContainer, TaskListContainerHeader, TaskListContainerTasks, SpanCountTask } from "../../styles/Style-Components/Form/Form";
import { Notice } from "../Notice/Notice";
import { TaskProp } from "../../services/interfaces/Task";
import { Task } from "../Task/Task";


import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

const Tasks: TaskProp[] = [
  {
    id: uuidv4(),
    taskDone: false,
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem consequatur officiis delectus tempora repudiandae aspernatur? Sit voluptas harum in maiores? Expedita fugiat error, eaque illo veniam deserunt adipisci perferendis aspernatur."
  },
  {
    id: uuidv4(),
    taskDone: false,
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem consequatur officiis delectus tempora repudiandae aspernatur? Sit voluptas harum in maiores? Expedita fugiat error, eaque illo veniam deserunt adipisci perferendis aspernatur."
  }
];

export function Form() {
  return (
    <FormContainer>
      <FormHeader>
        <form >
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit" >Criar <PlusCircle size={ 22 }/></button>
        </form>
      </FormHeader>
      <TaskListContainer>
        <TaskListContainerHeader>
          <div>
            <span>Tarefas criadas</span>
            <SpanCountTask>0</SpanCountTask>
          </div>
          <div>
            <span>Concluídas</span>
            <SpanCountTask>0 de 0</SpanCountTask>
          </div>
        </TaskListContainerHeader>
        <TaskListContainerTasks>
          {
            !Tasks.length ? <Notice /> : <Task />
          }
        </TaskListContainerTasks>
      </TaskListContainer>
    </FormContainer>
  );
}