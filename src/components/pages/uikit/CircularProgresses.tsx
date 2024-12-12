import UI from "@ui";
import React from "react";
import { CircularProgress } from "@mui/material";

const CircularProgresses: React.FC = () => {
    const sisze = Array.from({ length: 8 }, (_, i) => i + 1);

    return (
        <UI.Paper>
            <UI.Stack direction="row" gap={3}>
                {
                    sisze.map((size) => (
                        <CircularProgress size={`${size}rem`} thickness={2.5} />
                    ))
                }
            </UI.Stack>
        </UI.Paper>
    );
}

export default CircularProgresses;
