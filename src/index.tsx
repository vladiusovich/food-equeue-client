import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemePrvoider } from "@mui/material/styles";
import ResetStyles from "./styles/resetStyles";
import GlobalStyles from "./styles/GlobalStyle.styled";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AppStoreProvider from "./store/provider/AppStoreProvider";
import getTheme from "@styles/getTheme";
import getMuiTheme from "@styles/mui/getMuiTheme";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

const theme = getTheme("Dark");

const muiTheme = getMuiTheme(theme);

root.render((
    <React.StrictMode>
        <AppStoreProvider>
            <ThemeProvider theme={theme}>
                <MuiThemePrvoider theme={muiTheme}>
                    <RouterProvider router={router} />
                    <ResetStyles />
                    <GlobalStyles />
                </MuiThemePrvoider>
            </ThemeProvider>
        </AppStoreProvider>
    </React.StrictMode>
));
