import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: "Montserrat";
    border: 0;
  }

  body {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #334;
    color: #fff;
  }

  ::selection {
    background: #FF7373;
  }
`

export default GlobalStyle