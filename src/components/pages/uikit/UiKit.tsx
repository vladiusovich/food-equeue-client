import UI from "@ui";
import React from "react";
import Typography from "./Typography";
import Skeletons from "./Skeletons";
import Buttons from "./Buttons";
import Chips from "./Chips";
import CircularProgresses from "./CircularProgresses";

// TODO: split to tabs
const UiKit: React.FC = () => {
    return (
        <div style={{
            margin: "10px 15px",
        }}>
            <UI.Stack direction="column" gap={3}>
                <Typography />
                <Buttons />
                <Chips />
                <CircularProgresses />
                <Skeletons />
            </UI.Stack>
        </div>
    );
}

export default UiKit;
