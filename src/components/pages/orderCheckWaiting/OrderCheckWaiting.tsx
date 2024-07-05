import useAppStore from "@hook/useAppStore";
import typography from "@typography";
import UI from "@ui";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OrderCheckWaiting: React.FC = () => {
    const location = useLocation();

    const hash = location.state?.hash;

    const appStore = useAppStore();

    useEffect(() => {
        appStore.user.auth.login(hash);
    }, [hash]);

    return (
        <UI.Stack direction="column" gap={3} alignItems="center">
            <typography.small>Loking for your order</typography.small>
            <UI.Stack direction="row" gap={1} alignItems="center" >
                <UI.CircularProgress size="6rem" thickness={2.5} />
                <UI.Stack direction="column" gap={0.5}>
                    <UI.Stack direction="row" gap={1} alignItems="baseline">
                    </UI.Stack>
                </UI.Stack>
            </UI.Stack>
        </UI.Stack>
    );
}

export default observer(OrderCheckWaiting);
