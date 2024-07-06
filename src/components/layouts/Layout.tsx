import React from "react";
import S from "./Layout.styled";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import appRoutes from "../../router/routes";
import useAppStore from "@hook/useAppStore";
import { observer } from "mobx-react-lite";

const Layout: React.FC = () => {
    const [searchParams] = useSearchParams();

    const appStore = useAppStore();

    if (appStore.user.auth.isLoggedIn) {
        return (
            <Navigate to={appRoutes.home} />
        );
    }

    const hash = searchParams.get('hash');

    if (hash) {
        return (
            <Navigate to={appRoutes.customerProcess} state={{ hash }} replace />
        );
    }

    return (
        <S.container>
            <Outlet />
        </S.container>
    );
};

export default observer(Layout);
