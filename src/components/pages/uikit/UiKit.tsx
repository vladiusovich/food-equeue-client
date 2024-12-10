import UI from "@ui";
import React from "react";
import Typography from "./Typography";
import Skeletons from "./Skeletons";
import { CircularProgress } from "@mui/material";
import Buttons from "./Buttons";
import Chips from "./Chips";

// TODO: split to tabs
const UiKit: React.FC = () => {
    return (
        <div style={{
            margin: "10px auto",
            padding: "10px",
        }}>
            <UI.Stack direction="column" gap={3}>
                <Typography />
                <Buttons />
                <Chips />
                <Skeletons />
                <CircularProgress size="6rem" thickness={2.5} />
            </UI.Stack>
        </div>
    );
}

export default UiKit;
