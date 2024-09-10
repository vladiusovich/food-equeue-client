import typography from "@typography";
import UI from "@ui";
import React from "react";
import { observer } from "mobx-react-lite";
import GradeIcon from '@mui/icons-material/Grade';

interface Props {
    value: string | number;
    isCurrent: boolean;
}

const OrderItem: React.FC<Props> = ({
    value,
    isCurrent,
}) => {

    const label = (<typography.bold>{value}</typography.bold>);

    if (isCurrent) {
        return (
            <UI.Chip icon={<GradeIcon />} label={value} color="primary" />
        );
    }

    return (
        <UI.Chip label={value} />
    );
}

export default observer(OrderItem);
