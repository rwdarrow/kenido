import styled from "styled-components"

export const ImageContainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LanguageSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LanguageOption = styled.button`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 50px;
  font-size: 70px;
  cursor: pointer;
  transition: all 600ms ease-in-out;

  &:hover {
    background-color: var(--kn-red);
  }
`