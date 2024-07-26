import typography from "@typography";
import UI from "@ui";
import { observer } from "mobx-react-lite";
import React from "react";

const GuestPage: React.FC = () => {
    console.log('GuestPage');

    return (
        <UI.Stack direction="column" gap={3} alignItems="center">
            <typography.h3>Welcome to our service</typography.h3>

            <typography.default>
                You should to scan QR-code of your order and only after
                that you will see the order online
            </typography.default>
        </UI.Stack>
    );
}

export default observer(GuestPage);
