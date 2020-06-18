import styled from "styled-components";

export const SelectorContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: transparent;
`;

export const LanguageOption = styled.button`
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  transition: color 300ms ease-in-out, border-color 300ms ease-in-out;

  border-style: ${(props) => (props.selected ? "solid" : "none")};
  border-width: 3px;
  border-color: white;
  padding: 8px;

  &:hover {
    color: var(--kn-red);
    border-color: var(--kn-red);
  }
`;
