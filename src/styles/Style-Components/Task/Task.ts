import styled from "styled-components";

import { TaskContainerProp } from "../../../services/interfaces/Task";

export const TaskContainer = styled.div<TaskContainerProp>`
  width: 100%;
  height: 4.5rem;
  display: flex;
  gap: .75rem;
  padding: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${ props => props.theme["gray-500"] };
  border: 1px solid ${ props => props.theme["gray-400"] };
  border-radius: 8px;

  span {
    flex: 1;
    text-align: justify;
    text-decoration: ${ props => props.isChecked ? "line-through" : "none" };
    color: ${ props => props.isChecked ? props.theme["gray-300"] : props.theme["gray-100"] };
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    max-width: 36rem;
  }

  button {
    padding: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    transition: ease .1s;
    color: ${ props => props.theme["gray-300"] };

    &:hover {
      background-color: ${ props => props.theme["gray-400"] };
      color: ${ props => props.theme["red-300"] };
    }
  }
`;

