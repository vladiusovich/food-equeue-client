import React from "react";
import BaseLayout from "./base/BaseLayout";
import useRoteResolver from "@hook/useRoteResolver";
import { observer } from "mobx-react-lite";

const GuestLayout: React.FC = () => {
	useRoteResolver();

    return (
        <BaseLayout />
    );
};

export default observer(GuestLayout);
