import { createTheme, PaletteMode, Shadows } from "@mui/material";

const getMuiTheme = (theme: ThemeType) => createTheme(
    {
        typography: {
            fontFamily: "Inter",
        },
        palette: {
            mode: theme.mode.toLowerCase() as PaletteMode,
            primary: {
                main: theme.colors.typo.regular.highest,
            },
        },
        shadows: Array<"none">(25).fill("none") as Shadows,
        // components: {
        //     MuiButton: getMuiButtonTheme(theme),
        //     MuiTextField: getMuiTextFieldTheme(),
        //     MuiSwitch: getMuiSwitchTheme(theme),
        //     MuiPaper: getMuiPaperTheme(theme),
        //     MuiMenu: getMuiMenuTheme(),
        //     MuiMenuItem: getMuiMenuItemTheme(theme),
        //     MuiSkeleton: getMuiSkeletonTheme(theme),
        //     MuiPaginationItem: getMuiPaginationItemTheme(theme),
        // },
    },
);

export default getMuiTheme;
