import { NestedColorType } from "@styles/types/ColorsType";
import S from "./Typography.styled";

export type TypoVariant = keyof typeof S;

type TypographyProps = {
    variant: TypoVariant;
    color?: NestedColorType;
    children?: React.ReactNode;
};

// TODO: add colors and other props
const Typography: React.FC<TypographyProps> = (
    {
        variant = "default",
        color = "regular.highest",
        children,
    }
) => {
    const Typo = S[variant as keyof typeof S];

    return <Typo $color={color}>{children}</Typo>;

}

export default Typography;
