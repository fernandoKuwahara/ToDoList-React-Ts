import styled from "styled-components";

export const NoticeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;

    color: ${ props => props.theme["gray-300"] };
  }
`;