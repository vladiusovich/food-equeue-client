import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;

        background-color: ${({ theme }) => theme.colors.background.regular.main};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
`;

export default GlobalStyles;
