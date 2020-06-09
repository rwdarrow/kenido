import styled from "styled-components";

export const SelectorContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: transparent;
`;

export const LanguageOption = styled.button`
  background-color: transparent;
  font-size: 35px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  border-style: ${(props) => props.selected ? "solid" : "none"};
  border-width: 5px;
  border-color: white;
  padding: 15px;

  &:hover {
    color: black;
    border-color: black;
  }
`;