import React from "react";
import BaseLayout from "./base/BaseLayout";
import useRoteResolver from "@hook/useRoteResolver";

const VerifyOrderLayout: React.FC = () => {
	useRoteResolver();
    return (
        <BaseLayout />
    );
};

export default VerifyOrderLayout;
