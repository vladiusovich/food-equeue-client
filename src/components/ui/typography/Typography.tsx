import typography from "@typography";

export type TypoVariant = keyof typeof typography;

type TypographyProps = {
    variant: TypoVariant;
    children?: React.ReactNode;
};

// TODO: add colors and other props
const Typography: React.FC<TypographyProps> = (
    {
        variant = "default",
        children,
    }
) => {
    const Typo = typography[variant as keyof typeof typography];

    return <Typo key={variant}>{children}</Typo>;

}

export default Typography;
