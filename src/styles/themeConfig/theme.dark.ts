import AppThemeType from "../types/ThemeType";
import commonThemeConfig from "./common";

const theme: AppThemeType = {
    ...commonThemeConfig,
    mode: "Dark",
    colors: {
        typo: {
            regular: {
                light: "#b3b3b3",  // Light gray for secondary text
                main: "#e0e0e0",    // Lighter gray for main text
                dark: "#ffffff",    // White for headers or highlights
            },
            danger: {
                light: "#ff9999",   // Soft red for warnings
                main: "#ff5555",    // Bright red for errors
                dark: "#ff2222",    // Vibrant red for critical messages
            },
            success: {
                light: "#99ff99",   // Light green for success messages
                main: "#55ff55",    // Bright green for success indicators
                dark: "#22cc22",    // Deep green for confirmations
            },
            warning: {
                light: "#ffdd99",   // Soft yellow for warnings
                main: "#ffcc55",    // Bright yellow for main warnings
                dark: "#ffaa22",    // Darker yellow-orange for strong warnings
            },
        },
        background: {
            regular: {
                light: "#121212cf",   // Dark gray for secondary background
                main: "#1c1c1c",    // Deep black-gray for primary background
                dark: "#121212",    // Near black for darker regions
            },
            danger: {
                light: "#4d0000",   // Muted red for subtle danger areas
                main: "#660000",    // Deep red for error emphasis
                dark: "#330000",    // Very dark red for critical sections
            },
            success: {
                light: "#003300",   // Subtle green for success backgrounds
                main: "#0d5920",    // Dark green for successful contexts
                dark: "#001a00",    // Very dark green for strong success indicators
            },
            warning: {
                light: "#332600",   // Subtle brown-yellow for warnings
                main: "#664400",    // Deep orange-yellow for alerts
                dark: "#331a00",    // Very dark orange for critical warnings
            },
        },
        border: {
            regular: {
                light: "#3a3a3a",   // Soft gray for subtle borders
                main: "#5a5a5a",    // Medium gray for regular borders
                dark: "#8a8a8a",    // Light gray for stronger contrasts
            },
            danger: {
                light: "#ff5555",   // Bright red for alert borders
                main: "#cc4444",    // Deep red for regular error borders
                dark: "#992222",    // Dark red for critical borders
            },
            success: {
                light: "#55ff55",   // Bright green for subtle success borders
                main: "#44cc44",    // Deep green for success borders
                dark: "#229922",    // Dark green for strong success borders
            },
            warning: {
                light: "#ffcc55",   // Bright yellow-orange for subtle borders
                main: "#cc9944",    // Deeper orange for regular warning borders
                dark: "#996622",    // Dark orange-brown for strong warning borders
            },
        },
    },
};

export default theme;
