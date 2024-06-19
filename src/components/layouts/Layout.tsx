import React from "react";
import S from "./Layout.styled";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <S.container>
            <Outlet />
        </S.container>
    );
};

export default Layout;
