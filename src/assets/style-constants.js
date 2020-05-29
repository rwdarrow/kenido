import { keyframes } from "styled-components";

export const KN_RED = "#9b0000";

export const FlipDown = keyframes`
  from {
    transform: rotateX(0deg)
  }

  to {
    transform: rotateX(180deg)
  }
`;

export const FlipUp = keyframes`
  from {
    transform: rotateX(180deg)
  }

  to {
    transform: rotateX(0deg)
  }
`;

export const FlipLeft = keyframes`
  from {
    transform: rotateY(180deg)
  }

  to {
    transform: rotateY(0deg)
  }
`;

export const FlipRight = keyframes`
  from {
    transform: rotateY(180deg)
  }

  to {
    transform: rotateY(0deg)
  }
`;
