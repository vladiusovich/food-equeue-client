export type ColorPriorityType = "peak" | "highest" | "higher" | "high" | "medium" | "low";

export type ColorVariantType = "regular" | "danger" | "success" | "warning";

export type PriorityColorMapping = {
    [key in ColorPriorityType]: string;
};

export type VariantColorScheme = {
    [key in ColorVariantType]: PriorityColorMapping;
};

export type NestedColorType = `${ColorVariantType}.${ColorPriorityType}`;

interface StylesColorsType {
    typo: VariantColorScheme;
    background: VariantColorScheme;
    border: VariantColorScheme;
};


export default StylesColorsType;
