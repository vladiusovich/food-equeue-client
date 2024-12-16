import StylesColorsType from "./ColorsType";
import FontStyle from "./FontStyle";

export type ThemeNameType = "Dark" | "Light";

declare global {
    interface ThemeType {
        mode: ThemeNameType;
        typography: FontStyle;
        colors: StylesColorsType;
        border: {
            radius: {
                regular: string;
            };
        }
    }
}

export default ThemeType;
