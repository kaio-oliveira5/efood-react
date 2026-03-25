import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body {
    background-color: #fff8f2;
}

a {
    text-decoration: none;
}
`

export default GlobalStyle