import React from "react";
import { observer } from "mobx-react-lite";
import UI from "@ui";

interface Props {
    value: string | number;
    isCurrent: boolean;
}

const OrderItem: React.FC<Props> = ({
    value,
    isCurrent,
}) => {
    return (
        <UI.Chip label={value} variant={isCurrent ? undefined : "outlined"} />
    );
}

export default observer(OrderItem);
