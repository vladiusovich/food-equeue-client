import UI from "@ui";
import React from "react";
import { Chip } from "@mui/material";

const Chips: React.FC = () => {
    const handleClick = () => {
        console.log("Chip clicked!");
    };

    // Event handler for Chip delete
    const handleDelete = () => {
        console.log("Chip deleted!");
    };

    return (
        <UI.Paper>
            <UI.Stack direction="row" gap={1}>
                <Chip label="Basic Chip" />

                {/* Clickable Chip */}
                <Chip label="Clickable Chip" onClick={handleClick} />

                {/* Clickable and Deletable Chip */}
                <Chip label="Clickable & Deletable" onClick={handleClick} onDelete={handleDelete} />

                {/* Chip with Icon */}
                <Chip
                    label="Chip with Icon"
                    onClick={handleClick}
                />

                {/* Chip with Avatar */}
                <Chip
                    label="Avatar Chip"
                    onClick={handleClick}
                />

                {/* Outlined Chip */}
                <Chip label="Outlined Chip" variant="outlined" />

                {/* Disabled Chip */}
                <Chip label="Disabled Chip" disabled />

                {/* Deletable Chip with Custom Delete Icon */}
                <Chip
                    label="Deletable Chip"
                    onDelete={handleDelete}
                />
            </UI.Stack>
        </UI.Paper>
    );
}

export default Chips;
