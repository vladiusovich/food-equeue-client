import React from "react";
import { ThemeProvider } from "styled-components";
import ResetStyles from "./styles/resetStyles";
import GlobalStyles from "./styles/GlobalStyle.styled";
import ReactDOM from "react-dom/client";
import Theme from "./styles/Theme";
import App from "./components/App";


const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render((
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <ResetStyles />
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>
));
