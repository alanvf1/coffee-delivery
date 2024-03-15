import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["purple"]};
    }
    body {
        background-color: ${(props) => props.theme["background"]};
        color: ${(props) => props.theme["base-text"]};
        width: 100%;
        height: 100vh;
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button, address {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        font-style: normal;
    }

`;
