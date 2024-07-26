import React from "react";
import Menu from "@common/menu/Menu";
import BaseLayout from "./base/BaseLayout";

const ClientLayout: React.FC = () => {
    return (
        <BaseLayout>
            <Menu />
        </BaseLayout>
    );
};

export default ClientLayout;
