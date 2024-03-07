import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 46rem;
  min-height: 25.3125rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  padding: 0 1rem;
`;

export const FormHeader = styled.header`
  width: 100%;
  margin-top: -1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
    flex-wrap: wrap;

    textarea {
      flex: 1;
      height: 3.375rem;
      padding: 1rem;
      border: 1px solid ${ props => props.theme["gray-700"] };
      border-radius: 8px;
      background-color: ${ props => props.theme["gray-500"] };
      color: ${ props => props.theme.White };
      box-shadow: 0 0 0 2px transparent;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.4rem;
      transition: ease .1s;
      resize: none;
      overflow: hidden;

      &:focus {
        box-shadow: 0 0 0 2px ${ props => props.theme["purple-500"] };
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .5rem;
      padding: 1rem;
      border: 0;
      border-radius: 8px;
      background-color: ${ props => props.theme["blue-500"] };
      color: ${ props => props.theme.White };
      cursor: pointer;
      transition: ease .1s;

      &:hover {
        background-color: ${ props => props.theme["blue-300"] };
      }
    }
  }
`;

export const TaskListContainer = styled.div`
  width: 100%;
  max-height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskListContainerHeader = styled.header`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;

  div:nth-child(1) {
    span:nth-child(1) {
      color: ${ props => props.theme["blue-300"] };
      margin-right: .5rem;
    }
  }

  div:nth-child(2) {
    span:nth-child(1) {
      color: ${ props => props.theme["purple-300"] };
      margin-right: .5rem;
    }
  }
`;

export const SpanCountTask = styled.span`
  color: ${ props => props.theme.White };
  background-color: ${ props => props.theme["gray-400"] };
  padding: .2rem .5rem;
  border-radius: 999px;
`;

export const TaskListContainerTasks = styled.main`
  width: 100%;
  max-height: 44rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: .75rem;
`;