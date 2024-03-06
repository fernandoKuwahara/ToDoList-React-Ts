import styled from "styled-components";

interface InputCheckerProp {
  isChecked: boolean;
}

export const InputChecker = styled.div<InputCheckerProp>`
  min-width: 1.2rem;
  min-height: 1.2rem;
  max-width: 1.2rem;
  max-height: 1.2rem;
  margin-top: .25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${ props => (!props.isChecked ? props.theme["blue-300"] : 'transparent') };
  border-radius: 50%;
  background-color: ${ props => (props.isChecked ? props.theme["purple-500"] : 'transparent') };
  cursor: pointer;
  color: ${ props => props.theme["gray-100"] };
  transition: ease .1s;

  &:hover {
    border: 2px solid ${ props => (!props.isChecked ? props.theme["blue-500"] : 'transparent') };
    background-color: ${ props => (props.isChecked ? props.theme["purple-300"] : 'transparent') };
  }
`;