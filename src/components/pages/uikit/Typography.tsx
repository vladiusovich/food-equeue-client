import UI, { TypoVariant } from "@ui";
import React from "react";
import typography from "@typography";
import { SimplePaletteColorOptions, ColorVariantType } from "@styles/types/ColorsType";
import { Button } from "@mui/material";

const buttonVariants: ColorVariantType[] = [
    'regular',
    'success',
    'danger',
    'warning',
];

const buttonColorPriority: SimplePaletteColorOptions[] = [
    'light',
    'main',
    'dark',
];

const Typography: React.FC = () => {
    const typos = Object.keys(typography) as Array<TypoVariant>;
    const [currentVariantColor, setCurrentVariantColor] = React.useState<ColorVariantType>("regular");
    const [currentColorPriority, setCurrentColorPriority] = React.useState<SimplePaletteColorOptions>("main");

    return (
        <UI.Paper>
            <UI.Stack direction="column" gap={2}>
                <UI.Typography variant="bold">Color variant</UI.Typography>

                <UI.Stack direction="row" gap={1}>
                    {buttonVariants.map((variant) => (
                        <Button
                            key={variant}
                            variant="contained"
                            onClick={() => setCurrentVariantColor(variant)}
                        >
                            {variant}
                        </Button>
                    ))}
                </UI.Stack>

                <UI.Typography variant="bold">Color priority</UI.Typography>
                <UI.Stack direction="row" gap={1}>
                    {buttonColorPriority.map((priority) => (
                        <Button
                            key={priority}
                            variant="outlined"
                            onClick={() => setCurrentColorPriority(priority)}
                        >
                            {priority}
                        </Button>
                    ))}
                </UI.Stack>

                <UI.Stack direction="column" gap={2}>
                    {typos.map((typo) => (
                        <UI.Typography key={typo} variant={typo} color={`${currentVariantColor}.${currentColorPriority}`}>
                            {typo}
                        </UI.Typography>
                    ))}
                </UI.Stack>
            </UI.Stack>

        </UI.Paper>
    );
}

export default Typography;
