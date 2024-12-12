import { createGlobalStyle } from "styled-components";
import theme from "@styles/Theme";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;

        background-color: ${() => theme.colors.background.regular.peak};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
`;

export default GlobalStyles;
