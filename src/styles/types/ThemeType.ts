import StylesColorsType from "./ColorsType";

declare global {
    interface ThemeType {
        colors: StylesColorsType;
        borderRadius: {
            regular: string;
        }
    }
}

export default ThemeType;
