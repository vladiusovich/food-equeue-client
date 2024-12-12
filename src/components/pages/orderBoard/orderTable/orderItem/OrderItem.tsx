import UI from "@ui";
import React from "react";
import { observer } from "mobx-react-lite";
import GradeIcon from '@mui/icons-material/Grade';
import S from "./OrderItem.styled";

interface Props {
    value: string | number;
    isCurrent: boolean;
}

const OrderItem: React.FC<Props> = ({
    value,
    isCurrent,
}) => {
    if (isCurrent) {
        return (
            <S.chip icon={<GradeIcon />} label={value} color="primary" $isCurrent />
        );
    }

    return (
        <S.chip label={value} />
    );
}

export default observer(OrderItem);
