import typography from "@typography";

export type TypoVariant = keyof typeof typography;

type TypographyProps = {
    variant: TypoVariant;
    children?: React.ReactNode;
};

// TODOL add colors and other props
const Typography: React.FC<TypographyProps> = (
    {
        variant = "default",
    }
) => {
    const Typo = typography[variant as keyof typeof typography];

    return <Typo key={variant}>{variant}</Typo>;

}

export default Typography;
