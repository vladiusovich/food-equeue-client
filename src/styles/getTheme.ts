import darkTheme from "./theme.dark";
import lightTheme from "./theme.light";
import { ThemeNameType } from "./types/ThemeType";

const themes = {
    Dark: darkTheme,
    Light: lightTheme,
} as const;

const getTheme = (themeValue: ThemeNameType) => themes[themeValue] ?? darkTheme;

export default getTheme;
