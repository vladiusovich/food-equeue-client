import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        background: linear-gradient(to bottom right, #232a43db 10%, #3a2f4f 40%, #5d2f56 70%, #7a3563 100%);
        background-attachment: fixed;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
`;

export default GlobalStyles;
