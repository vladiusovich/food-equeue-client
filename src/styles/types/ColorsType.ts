export type SimplePaletteColorOptions = "light" | "main" | "dark";

export type ColorVariantType = "regular" | "danger" | "success" | "warning";

export type PriorityColorMapping = {
    [key in SimplePaletteColorOptions]: string;
};

export type VariantColorScheme = {
    [key in ColorVariantType]: PriorityColorMapping;
};

export type NestedColorType = `${ColorVariantType}.${SimplePaletteColorOptions}`;

interface StylesColorsType {
    typo: VariantColorScheme;
    background: VariantColorScheme;
    border: VariantColorScheme;
};


export default StylesColorsType;
