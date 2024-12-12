import React from "react";
import S from "./BaseLayout.styled";
import { Outlet } from "react-router-dom";
import Menu from "@common/menu/Menu";

interface BaseLayoutProps {
    isLogged?: boolean;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
    isLogged = false,
}) => {
    return (
        <S.container>
            <S.content>
                <Outlet />
            </S.content>
            {isLogged && (<Menu />)}
        </S.container>
    );
};

export default BaseLayout;
