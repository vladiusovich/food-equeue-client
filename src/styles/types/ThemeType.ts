import StylesColorsType from "./ColorsType";
export type ThemeNameType = "Dark" | "Light";

declare global {
    interface ThemeType {
        mode: ThemeNameType;
        colors: StylesColorsType;
        borderRadius: {
            regular: string;
        }
    }
}

export default ThemeType;
