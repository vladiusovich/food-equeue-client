import React from "react";
import BaseLayout from "./base/BaseLayout";
import useRoteResolver from "@hook/useRoteResolver";

const VerifyOrderLayout: React.FC = () => {
	useRoteResolver();

    console.log('VerifyOrderLayout');

    return (
        <BaseLayout />
    );
};

export default VerifyOrderLayout;
