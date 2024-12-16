import { createTheme, PaletteMode, Shadows } from "@mui/material";
import ThemeType from "@styles/types/ThemeType";

const getMuiTheme = (theme: ThemeType) => createTheme(
    {
        typography: {
            fontFamily: theme.typography.fontFamily,
        },
        palette: {
            mode: theme.mode.toLowerCase() as PaletteMode,
            primary: {
                main: theme.colors.typo.regular.main,
            },
        },
        shadows: Array<"none">(25).fill("none") as Shadows,
    },
);

export default getMuiTheme;
