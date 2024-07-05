import React from "react";
import S from "./Layout.styled";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import appRoutes from "../../router/routes";

const Layout: React.FC = () => {
    const [searchParams] = useSearchParams();

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

export default Layout;
