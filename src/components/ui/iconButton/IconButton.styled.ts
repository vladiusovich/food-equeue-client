// import styled, { css } from "styled-components";
// import { IconButton } from "@mui/material";
// import StylesVariantsType from "@styles/types/stylesVariantsType";
// import { ExtendedSizeType } from "@styles/types/themeType";
// import media from "@styles/media/media";

// const defaultSize: ExtendedSizeType = "small";

// const svgSizes: Record<ExtendedSizeType, string> = {
//     large: "34px",
//     medium: "24px",
//     small: "24px",
//     extraSmall: "20px",
// };

// type TVariant = "transparent" | "neutral" | "inline";

// export interface StyledPropsType {
//     $variant?: TVariant;
//     $size?: ExtendedSizeType;
// }

// const variantStyles: StylesVariantsType<TVariant> = {
//     neutral: css`
//         && {
//             background: ${({ theme }) => theme.colors.foreground.high};
//             color: ${({ theme }) => theme.colors.typo.light.higher};
//             &:hover {
//                 background: ${({ theme }) => theme.colors.foreground.medium};
//             }
//             &:disabled {
//                 background: ${({ theme }) => theme.colors.foreground.high};
//                 color: ${({ theme }) => theme.colors.typo.light.lower};
//             }
//         }
//     `,
//     transparent: css`
//         &:hover {
//             background: ${({ theme }) => theme.colors.foreground.medium};
//         }
//     `,
//     inline: css`
//         && {
//             height: min-content;
//             background-color: transparent;

//             color: ${({ theme }) => theme.colors.typo.light.medium};

//             &:hover {
//                 color: ${({ theme }) => theme.colors.typo.light.higher};
//             }
//         }
//     `,
// };

// const S = {
//     iconButton: styled(IconButton)<StyledPropsType>`
//         ${({ $variant = "transparent" }) => variantStyles[$variant]};
//         aspect-ratio: 1;

//         height: ${({ theme, $size = defaultSize }) => theme.sizes.cabinet.controlsHeight.mobile[$size]};
//         ${({ theme, $size = defaultSize }) => (media.md(css`
//             height: ${theme.sizes.cabinet.controlsHeight.desktop[$size]};
//         `))};

//         svg {
//             width: ${({ $size = defaultSize }) => svgSizes[$size]};
//             height: ${({ $size = defaultSize }) => svgSizes[$size]};
//         }

//     `,
// };

// export default S;
