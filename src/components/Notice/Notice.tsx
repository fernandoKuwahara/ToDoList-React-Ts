import clipBoard from "../../assets/clipboard.svg";
import { NoticeContainer } from "../../styles/Style-Components/Notice/Notice";

export function Notice() {
  return (
    <NoticeContainer>
      <img src={ clipBoard } alt="Prancheta com trés linhas escritas." />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </NoticeContainer>
  );
}