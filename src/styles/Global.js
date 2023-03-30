import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize}

html {
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fontSize};
    background: ${({ theme }) => theme.palette.background.default};
}

img {
    max-width: 100%;
    display: block;
    height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}

p {
    margin: 0;
}

ul,
li {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
    text-decoration: none;
}

button:hover {
    cursor: pointer;
}

button:focus {
    outline: none;
}

input:focus,
input:active,
button:active,
button:focus {
    outline: none;
}


/* Normalize */


`;

export default GlobalStyles;