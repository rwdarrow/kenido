import styled from "styled-components";

export const SelectorContainer = styled.div`
  display: flex;
  background-color: transparent;
`;

export const LanguageOption = styled.button`
  background-color: transparent;
  font-size: 45px;
  cursor: pointer;
  padding: 15px;
  margin: 15px;
  transition: all 300ms ease-in-out;

  &:hover {
    /* background-color: var(--kn-red) */
    font-size: 55px;
  }
`;