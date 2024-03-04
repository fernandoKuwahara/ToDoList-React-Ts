import { FormContainer } from "../../styles/Style-Components/Form/Form";

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
      <div>

      </div>
    </FormContainer>
  );
}