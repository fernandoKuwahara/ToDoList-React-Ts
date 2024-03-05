import { FormContainer, FormHeader, TaskListContainer, TaskListContainerHeader, TaskListContainerTasks } from "../../styles/Style-Components/Form/Form";

import { PlusCircle } from "phosphor-react";

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
            <span>0</span>
          </div>
          <div>
            <span>Concluídas</span>
            <span>0 de 0</span>
          </div>
        </TaskListContainerHeader>
        <TaskListContainerTasks>
          <h1>Ola munde</h1>
        </TaskListContainerTasks>
      </TaskListContainer>
    </FormContainer>
  );
}