import ThemeType from "./types/ThemeType";

// TODO:
const theme: ThemeType = {
    colors: {
        typo: {
            regular: {
                peak: "#000000",
                highest: "#1A1A1A",
                higher: "#333333",
                high: "#4D4D4D",
                medium: "#666666",
                low: "#999999",
            },
            danger: {
                peak: "#FF0000",
                highest: "#E60000",
                higher: "#CC0000",
                high: "#B30000",
                medium: "#990000",
                low: "#800000",
            },
            success: {
                peak: "#008000",
                highest: "#007000",
                higher: "#006000",
                high: "#005000",
                medium: "#004000",
                low: "#003000",
            },
            warning: {
                peak: "#FFA500",
                highest: "#E69500",
                higher: "#CC8500",
                high: "#B37500",
                medium: "#996600",
                low: "#804C00",
            },
        },
        background: {
            regular: {
                peak: "#FFFFFF",
                highest: "#F5F5F5",
                higher: "#E5E5E5",
                high: "#D5D5D5",
                medium: "#C5C5C5",
                low: "#B5B5B5",
            },
            danger: {
                peak: "#FFE5E5",
                highest: "#FFD5D5",
                higher: "#FFC5C5",
                high: "#FFB5B5",
                medium: "#FFA5A5",
                low: "#FF9595",
            },
            success: {
                peak: "#E5FFE5",
                highest: "#D5FFD5",
                higher: "#C5FFC5",
                high: "#B5FFB5",
                medium: "#A5FFA5",
                low: "#95FF95",
            },
            warning: {
                peak: "#FFF5E5",
                highest: "#FFE5D5",
                higher: "#FFD5C5",
                high: "#FFC5B5",
                medium: "#FFB5A5",
                low: "#FFA595",
            },
        },
        border: {
            regular: {
                peak: "#CCCCCC",
                highest: "#BFBFBF",
                higher: "#B2B2B2",
                high: "#A6A6A6",
                medium: "#999999",
                low: "#8C8C8C",
            },
            danger: {
                peak: "#FF6666",
                highest: "#FF4C4C",
                higher: "#FF3333",
                high: "#FF1919",
                medium: "#FF0000",
                low: "#E60000",
            },
            success: {
                peak: "#66FF66",
                highest: "#4CFF4C",
                higher: "#33FF33",
                high: "#19FF19",
                medium: "#00FF00",
                low: "#00E600",
            },
            warning: {
                peak: "#FFC966",
                highest: "#FFB94C",
                higher: "#FFA933",
                high: "#FF9919",
                medium: "#FF8800",
                low: "#E67700",
            },
        },
    },
    borderRadius: {
        regular: "8px",
    },
};

export default theme;