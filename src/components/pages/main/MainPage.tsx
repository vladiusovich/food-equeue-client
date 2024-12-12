import UI from "@ui";
import React from "react";
import BranchInfo from "./branchInfo/BranchInfo";
import QueueInfo from "./queueInfo/QueueInfo";
import ClientInfo from "./clientInfo/ClientInfo";
import { observer } from "mobx-react-lite";

const MainPage: React.FC = () => {
    return (
        <UI.Stack direction="column" gap={1.5}>
            <BranchInfo />
            <ClientInfo />
            <QueueInfo />
        </UI.Stack>
    );
}

export default observer(MainPage);
