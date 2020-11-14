import styled from "styled-components";

export const ProductPreviewContainer = styled.div`
  flex: 1 20%;
  margin: 1rem;
  height: 40vh;
  box-shadow: 3px 3px 29px -5px rgba(0, 0, 0, 0.72);
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  border-radius: 10px;

  &:hover {
    transform: scale(1.01);
  }

  @media only screen and (max-width: 600px) {
    flex: 1 50%;
  }
`;

export const ImageContainer = styled.div`
  height: 80%;
  background-size: cover;
  background-position: center;
`;

export const PreviewFooter = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--kn-red);
`;

export const ProductInfo = styled.div`
  display: flex;
  max-width: 80%;
  justify-content: space-between;
  font-size: 1.7rem;
  text-align: center;
  font-family: "Barlow Condensed"
`;

export const SaleContainer = styled.div`
  position: absolute;
  padding: 1rem;
  font-size: 48px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px 0 10px 0;
  font-family: "Barlow Condensed"
`