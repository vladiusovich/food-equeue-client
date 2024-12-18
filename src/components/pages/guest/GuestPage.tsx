import UI from "@ui";
import React from "react";

const GuestPage: React.FC = () => {
    return (
        <UI.Stack direction="column" gap={2} alignItems="center">
            <UI.Typography variant="h3">Welcome to our service</UI.Typography>

            <UI.Typography variant="xsmall">
                You should to scan QR-code of your order and only after
                that you will see the order online
            </UI.Typography>
        </UI.Stack>
    );
}

export default GuestPage;
