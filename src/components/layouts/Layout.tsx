import React from "react";
import S from "./Layout.styled";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <S.container>
            {/* <Outlet /> */}
            {children}
        </S.container>
    );
};

export default Layout;
