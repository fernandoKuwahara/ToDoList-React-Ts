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

  div:nth-child(1) {
    width: 100%;
    margin-top: -1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: blue;

    form {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: .5rem;
      flex-wrap: wrap;

      input {
        flex: 1;
        height: 3.375rem;
        padding: 1rem;
        border: 1px solid ${ props => props.theme["gray-700"] };
        border-radius: 8px;
        background-color: ${ props => props.theme["gray-500"] };
        color: ${ props => props.theme.White };
        box-shadow: 0 0 0 2px transparent;
        transition: ease .1s;

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
  }

  div:nth-child(2) {
    width: 100%;
    height: 28.1875rem;

    background-color: red;
  }
`;