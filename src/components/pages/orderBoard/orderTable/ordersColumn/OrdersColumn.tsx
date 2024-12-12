import UI from "@ui";
import React from "react";

interface Props {
    title: string;
    children: React.ReactNode;
}

const OrdersColumn: React.FC<Props> = ({
    title,
    children,
}) => {
    return (
        <UI.Stack direction="column" gap={1} >
            <UI.Typography variant="h4"> {title} </UI.Typography>

            <UI.Stack direction="column" gap={1} alignItems="stretch">
                {children}
            </UI.Stack>
        </UI.Stack>
    );
}

export default OrdersColumn;
