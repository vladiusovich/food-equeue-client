import React from "react";
import S from "./BaseLayout.styled";
import { Outlet } from "react-router-dom";

interface BaseLayoutProps {
    children?: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
        <S.container>
            <Outlet />
            {children}
        </S.container>
    );
};

export default BaseLayout;
