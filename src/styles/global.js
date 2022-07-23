import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Roboto Slab', serif;
        background: ${({theme}) => theme.COLORS.BACKGROUND_700};
        color: ${({theme}) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;

    }
    
    a {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.COLOR_PRIMARY};
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
        font-family: 'Roboto Slab', serif;

    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;