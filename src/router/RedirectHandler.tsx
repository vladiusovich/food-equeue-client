import { useNavigate } from "react-router-dom";
import useAppStore from "@hook/useAppStore";
import appRoutes from "./routes";
import { useEffect } from "react";

const RedirectHandler: React.FC = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const navigate = useNavigate();
    const appStore = useAppStore();
    const hash = searchParams.get('hash');

    useEffect(() => {
        if (hash) {
            navigate(appRoutes.customerProcess, { state: { hash }, replace: true });
            return;
        }
    }, [appStore, appStore.user.auth.isLoggedIn, hash]);

    return null;
};

export default RedirectHandler;
