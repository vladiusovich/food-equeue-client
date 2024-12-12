import React from "react";
import BaseLayout from "./base/BaseLayout";
import useRouteResolver from "@hook/useRoteResolver";

const VerifyOrderLayout: React.FC = () => {
	useRouteResolver();
    return (
        <BaseLayout />
    );
};

export default VerifyOrderLayout;
