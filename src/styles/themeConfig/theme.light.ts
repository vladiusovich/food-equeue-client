import AppThemeType from "../types/ThemeType";
import commonThemeConfig from "./common";

const theme: AppThemeType = {
    ...commonThemeConfig,
    mode: "Light",
    colors: {
        typo: {
            regular: {
                light: "#4a4a4a",  // Dark gray for light text
                main: "#000000",    // Black for main text
                dark: "#1c1c1c",    // Very dark gray for dark text
            },
            danger: {
                light: "#ffcccc",   // Soft red for warnings
                main: "#ff4444",    // Red for errors
                dark: "#cc0000",    // Dark red for critical messages
            },
            success: {
                light: "#ccffcc",   // Light green for soft success messages
                main: "#00cc44",    // Green for success indicators
                dark: "#009933",    // Dark green for confirmations
            },
            warning: {
                light: "#fff5cc",   // Pale yellow for warnings
                main: "#ffaa00",    // Orange for main warnings
                dark: "#cc7700",    // Dark orange for critical warnings
            },
        },
        background: {
            regular: {
                light: "#f9f9f9",   // Light gray for subtle backgrounds
                main: "#ffffff",    // White for primary backgrounds
                dark: "#e0e0e0",    // Gray for secondary backgrounds
            },
            danger: {
                light: "#ffe6e6",   // Soft pink for error backgrounds
                main: "#ff9999",    // Light red for error emphasis
                dark: "#ff6666",    // Darker red for strong error backgrounds
            },
            success: {
                light: "#e6ffe6",   // Light green for success backgrounds
                main: "#99ff99",    // Bright green for successful contexts
                dark: "#66cc66",    // Strong green for dominant success messages
            },
            warning: {
                light: "#fffbe6",   // Pale yellow for warning backgrounds
                main: "#ffe066",    // Yellow for prominent warnings
                dark: "#ffcc00",    // Golden yellow for strong emphasis
            },
        },
        border: {
            regular: {
                light: "#dcdcdc",   // Light gray for subtle borders
                main: "#bdbdbd",    // Gray for regular borders
                dark: "#8d8d8d",    // Dark gray for strong borders
            },
            danger: {
                light: "#ff9999",   // Light red for alert borders
                main: "#ff4444",    // Red for prominent error borders
                dark: "#cc0000",    // Dark red for critical borders
            },
            success: {
                light: "#99ff99",   // Bright green for subtle success borders
                main: "#00cc44",    // Green for regular success borders
                dark: "#009933",    // Dark green for strong success borders
            },
            warning: {
                light: "#ffe066",   // Yellow for subtle warning borders
                main: "#ffaa00",    // Orange for regular warning borders
                dark: "#cc7700",    // Dark orange for strong warning borders
            },
        },
    },
};

export default theme;