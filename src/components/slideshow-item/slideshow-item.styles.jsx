import styled from "styled-components"

export const ImageContainer = styled.div`
  width: 100%;
  height: 770px;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;