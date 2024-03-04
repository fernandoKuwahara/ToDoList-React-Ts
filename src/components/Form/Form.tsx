import { FormContainer, TaksListContainer, TaksListContainerHeader, TaskListContainerTasks } from "../../styles/Style-Components/Form/Form";

import { PlusCircle } from "phosphor-react";

export function Form() {
  return (
    <FormContainer>
      <div>
        <form >
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit" >Criar <PlusCircle size={ 22 }/></button>
        </form>
      </div>
      <TaksListContainer>
        <TaksListContainerHeader>
          <div>
            <span>Tarefas Criadas</span>
            <span>0</span>
          </div>
          <div>
            <span>Concluídas</span>
            <span>0 de 0</span>
          </div>
        </TaksListContainerHeader>
        <TaskListContainerTasks>

        </TaskListContainerTasks>
      </TaksListContainer>
    </FormContainer>
  );
}