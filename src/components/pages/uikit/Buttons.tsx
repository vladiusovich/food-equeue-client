import UI from "@ui";
import React from "react";
import Button from "@mui/material/Button";

const Buttons: React.FC = () => {
    const buttonVariants: { label: string, variant: 'outlined' | 'text' | 'outlined', color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'inherit', disabled?: boolean, startIcon?: React.ReactNode }[] = [
        { label: 'Primary', variant: 'outlined', color: 'primary' },
        { label: 'Secondary', variant: 'outlined', color: 'secondary' },
        { label: 'Success', variant: 'outlined', color: 'success' },
        { label: 'Warning', variant: 'outlined', color: 'warning' },
        { label: 'Error', variant: 'outlined', color: 'error' },
        { label: 'Info', variant: 'outlined', color: 'info' },
        { label: 'Text Button', variant: 'text', color: undefined },
        { label: 'Outlined Button', variant: 'outlined', color: undefined },
        { label: 'Disabled', variant: 'outlined', color: undefined, disabled: true },
        { label: 'Custom Button', variant: 'outlined', color: undefined, startIcon: <span>🔥</span> },
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
