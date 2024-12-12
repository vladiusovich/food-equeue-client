import React from "react";
import BaseLayout from "./base/BaseLayout";
import useRouteResolver from "@hook/useRoteResolver";
import { observer } from "mobx-react-lite";

const GuestLayout: React.FC = () => {
	useRouteResolver();

    return (
        <BaseLayout />
    );
};

export default observer(GuestLayout);
