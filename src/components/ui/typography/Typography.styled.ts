import styled from "styled-components";
import typography from "@typography";
import { ColorPriorityType, ColorVariantType, NestedColorType } from "@styles/types/ColorsType";
import theme from "@styles/Theme";
import { TypoVariant } from "./Typography";

// Helper to retrieve dynamic color
const getColor = (color?: NestedColorType): string => {
    if (!color) {
        return "inherit";
    }

    const [variant, priority] = color.split(".") as [ColorVariantType, ColorPriorityType];
    return theme.colors.typo[variant]?.[priority] || "inherit";
};

// Utility to create a styled typography component
const createTypographyComponent = (component: any) =>
    styled(component)`
        color: ${({ $color }) => getColor($color)};
    `;

const typos = Object.keys(typography) as Array<TypoVariant>;

const S: Record<keyof typeof typography, ReturnType<typeof createTypographyComponent>> = typos.reduce(
    (acc, key) => {
        acc[key] = createTypographyComponent(typography[key]);
        return acc;
    },
    {} as Record<keyof typeof typography, ReturnType<typeof createTypographyComponent>>
);

export default S;
