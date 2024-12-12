import UI, { TypoVariant } from "@ui";
import React from "react";
import typography from "@typography";
import { NestedColorType } from "@styles/types/ColorsType";
import { Button } from "@mui/material";

const buttonVariants: { variant: string, color: string, value: NestedColorType }[] = [
    { value: 'regular.medium', variant: 'outlined', color: 'primary' },
    { value: 'success.medium', variant: 'outlined', color: 'secondary' },
    { value: 'warning.medium', variant: 'outlined', color: 'warning' },
    { value: 'danger.medium', variant: 'outlined', color: 'error' },
];

const Typography: React.FC = () => {
    const typos = Object.keys(typography) as Array<TypoVariant>;
    const [currentColor, setCurrentColor] = React.useState<NestedColorType>("regular.medium");

    return (
        <UI.Paper>
            <UI.Stack direction="column" gap={2}>
                <UI.Typography variant="bold">Color variant</UI.Typography>

                <UI.Stack direction="row" justifyContent="center" gap={1}>
                    {buttonVariants.map((button) => (
                        <Button
                            key={button.value}
                            variant="contained"
                            onClick={() => setCurrentColor(button.value)}
                        >
                            {button.value}
                        </Button>
                    ))}
                </UI.Stack>

                <UI.Stack direction="column" gap={2}>
                    {typos.map((typo) => (
                        <UI.Typography key={typo} variant={typo} color={currentColor}>
                            {typo}
                        </UI.Typography>
                    ))}
                </UI.Stack>
            </UI.Stack>

        </UI.Paper>
    );
}

export default Typography;
