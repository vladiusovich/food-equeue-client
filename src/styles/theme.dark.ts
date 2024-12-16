import AppThemeType from "./types/ThemeType";

const theme: AppThemeType = {
    mode: "Dark",
    colors: {
        typo: {
            regular: {
                peak: "#FFFFFF",
                highest: "#EAEAEA",
                higher: "#CCCCCC",
                high: "#B3B3B3",
                medium: "#999999",
                low: "#808080",
            },
            danger: {
                peak: "#FF6B6B",
                highest: "#FF5757",
                higher: "#FF4343",
                high: "#FF2F2F",
                medium: "#E62626",
                low: "#CC1F1F",
            },
            success: {
                peak: "#6BFF6B",
                highest: "#57FF57",
                higher: "#43FF43",
                high: "#2FFF2F",
                medium: "#26E626",
                low: "#1FCC1F",
            },
            warning: {
                peak: "#FFC94C",
                highest: "#FFB835",
                higher: "#FFA71F",
                high: "#FF9608",
                medium: "#E68600",
                low: "#CC7600",
            },
        },
        background: {
            regular: {
                peak: "#121212",
                highest: "#1E1E1E",
                higher: "#2C2C2C",
                high: "#383838",
                medium: "#444444",
                low: "#555555",
            },
            danger: {
                peak: "#3B1818",
                highest: "#451F1F",
                higher: "#5C2626",
                high: "#732D2D",
                medium: "#8A3535",
                low: "#A23C3C",
            },
            success: {
                peak: "#183B18",
                highest: "#1F451F",
                higher: "#265C26",
                high: "#2D732D",
                medium: "#358A35",
                low: "#3CA23C",
            },
            warning: {
                peak: "#3B2C18",
                highest: "#45351F",
                higher: "#5C4626",
                high: "#73582D",
                medium: "#8A6935",
                low: "#A27A3C",
            },
        },
        border: {
            regular: {
                peak: "#666666",
                highest: "#5A5A5A",
                higher: "#4D4D4D",
                high: "#404040",
                medium: "#333333",
                low: "#292929",
            },
            danger: {
                peak: "#994949",
                highest: "#A95353",
                higher: "#B95D5D",
                high: "#C96666",
                medium: "#D97070",
                low: "#E97979",
            },
            success: {
                peak: "#499949",
                highest: "#53A953",
                higher: "#5DB95D",
                high: "#66C966",
                medium: "#70D970",
                low: "#79E979",
            },
            warning: {
                peak: "#997949",
                highest: "#A98953",
                higher: "#B9995D",
                high: "#C9A966",
                medium: "#D9B970",
                low: "#E9C979",
            },
        },
    },
    borderRadius: {
        regular: "12px",
    },
};

export default theme;
