import React from "react";
import { observer } from "mobx-react-lite";
import S from "./OrderItem.styled";

interface Props {
    value: string | number;
    isCurrent: boolean;
}

const OrderItem: React.FC<Props> = ({
    value,
    isCurrent,
}) => {
    return (
        <S.chip
            label={value}
            variant={isCurrent ? undefined : "outlined"}
            $isCurrent={isCurrent}
        />
    );
}

export default observer(OrderItem);
