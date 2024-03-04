import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: .5rem;

  width: 100%;
  height: 12.5rem;

  background-color: ${props => props.theme["gray-700"]};

  div {
    font-weight: 900;
    font-size: 2.5rem;
    line-height: 1.6;
  }

  div span:nth-child(1) {
    color: ${ props => props.theme["blue-300"] };
  }

  div span:nth-child(2) {
    color: ${ props => props.theme["purple-300"] };
  }
`;