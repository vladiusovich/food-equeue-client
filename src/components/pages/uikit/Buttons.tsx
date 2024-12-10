import UI from "@ui";
import React from "react";
import Button from "@mui/material/Button";

const Buttons: React.FC = () => {
    const buttonVariants: { label: string, variant: 'contained' | 'text' | 'outlined', color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'inherit', disabled?: boolean, startIcon?: React.ReactNode }[] = [
        { label: 'Primary', variant: 'contained', color: 'primary' },
        { label: 'Secondary', variant: 'contained', color: 'secondary' },
        { label: 'Success', variant: 'contained', color: 'success' },
        { label: 'Warning', variant: 'contained', color: 'warning' },
        { label: 'Error', variant: 'contained', color: 'error' },
        { label: 'Info', variant: 'contained', color: 'info' },
        { label: 'Text Button', variant: 'text', color: undefined },
        { label: 'Outlined Button', variant: 'outlined', color: undefined },
        { label: 'Disabled', variant: 'contained', color: undefined, disabled: true },
        { label: 'Custom Button', variant: 'contained', color: undefined, startIcon: <span>🔥</span> },
    ];

    return (
        <UI.Paper>
            <UI.Stack direction="row" gap={1}>
                {buttonVariants.map((button, index) => (
                    <Button
                        key={index}
                        variant={button.variant}
                        color={button.color}
                        disabled={button.disabled}
                        startIcon={button.startIcon}
                    >
                        {button.label}
                    </Button>
                ))}
            </UI.Stack>
        </UI.Paper>
    );
}

export default Buttons;
