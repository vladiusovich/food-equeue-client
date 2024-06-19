import React from "react";
import { IconButtonProps } from "@mui/material";

export interface IconButtonPropsType extends Omit<IconButtonProps, "size"> {
    // variant?: StyledPropsType["$variant"];
    // size?: StyledPropsType["$size"];
}

const IconButton: React.FC<IconButtonPropsType> = ({
    ...props
}) => (
    <IconButton
        {...props}
    />
);

export default IconButton;
