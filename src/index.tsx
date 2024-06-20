import React from "react";
import { ThemeProvider } from "styled-components";
import ResetStyles from "./styles/resetStyles";
import GlobalStyles from "./styles/GlobalStyle.styled";
import ReactDOM from "react-dom/client";
import Theme from "./styles/Theme";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AppStoreProvider from "./store/provider/AppStoreProvider";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render((
    <React.StrictMode>
        <AppStoreProvider>
            <RouterProvider router={router} />
            <ThemeProvider theme={Theme}>
                <ResetStyles />
                <GlobalStyles />
            </ThemeProvider>
        </AppStoreProvider>
    </React.StrictMode>
));
