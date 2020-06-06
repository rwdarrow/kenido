import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Prata";
  }

  button {
    font-family: "Prata";
    border:none;
    outline:none;
    border-radius: 0px;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    color: white;
  }
`