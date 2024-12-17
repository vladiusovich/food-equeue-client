import useAppStore from "@hook/useAppStore";
import UI from "@ui";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import appRoutes from "../../../router/routes";

const OrderCheckWaitingPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const hash = location.state?.hash;

    const appStore = useAppStore();

    // TODO: reimplement this
    useEffect(() => {
        const handleRedirect = async () => {
            if (hash) {
                appStore.user.auth.logout();
                await appStore.user.auth.login(hash);
                navigate(appRoutes.home, { replace: true });
            } else if (appStore.user.auth.isLoggedIn) {
                navigate(appRoutes.home, { replace: true });
            } else {
                navigate(appRoutes.guest, { replace: true });
            }

            // TODO: Reimplement this
            // Can't fix the case when redirecting from this page leaves hash=someHash in the URL
            window.history.replaceState({}, '', window.location.pathname + window.location.hash);
        };

        handleRedirect();
    }, [hash]);

    return (
        <UI.Stack direction="column" gap={3} alignItems="center">
            <UI.Typography variant="small">Loking for your order</UI.Typography>
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

export default observer(OrderCheckWaitingPage);
