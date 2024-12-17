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

    useEffect(() => {
        (async () => {
            console.log('OrderCheckWaitingPage', {
                location: window.location,
            });

            appStore.user.auth.logout();
            await appStore.user.auth.login(hash);

            if (appStore.user.auth.isLoggedIn) {
                /* TODO: reimplement this
                    I cant fix case when redirect from this page the hash=someHash is still in the url
                */
                window.history.replaceState({}, '', window.location.pathname + window.location.hash);
                navigate(appRoutes.home);
            } else {
                // TODO: handle case when user can't login
                navigate(appRoutes.guest);
            }
        })();
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
