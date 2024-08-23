import { useNavigate, useSearchParams } from "react-router-dom";
import useAppStore from "@hook/useAppStore";
import appRoutes from "../router/routes";
import { useEffect } from "react";


const useRoteResolver = () => {
    const [searchParams] = useSearchParams();

    const appStore = useAppStore();

    const navigate = useNavigate();

    const hash = searchParams.get('hash');

    useEffect(() => {
        if (appStore.user.auth.isLoggedIn) {
            console.debug('useRoteResolver. isLoggedIn', appStore.user.auth.isLoggedIn);

            navigate(appRoutes.home);
            return;
        }

        if (hash) {
            console.debug('useRoteResolver. hash: ', appRoutes.customerProcess, hash);

            navigate(appRoutes.customerProcess, { state: { hash }, replace: true });
            return;
        }

        if (!appStore.user.auth.isLoggedIn && !hash) {
            console.debug('useRoteResolver. loggeout');
            navigate(appRoutes.guest);
        }

    }, [appStore, appStore.user.auth.isLoggedIn, hash]);
};

export default useRoteResolver;