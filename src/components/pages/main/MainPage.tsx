import UI from "@ui";
import React from "react";
import BranchInfo from "./branchInfo/BranchInfo";
import QueueInfo from "./queueInfo/QueueInfo";
import ClientInfo from "./clientInfo/ClientInfo";
import ExecutionTimeInfo from "./executionTimeInfo/ExecutionTimeInfo";

const MainPage: React.FC = () => {
    return (
        <UI.Stack direction="column" gap={3}>
            <BranchInfo />
            <UI.Divider variant="middle" />

            <QueueInfo />
            <UI.Divider variant="middle" />

            <ClientInfo />
            <UI.Divider variant="middle" />

            <ExecutionTimeInfo />
        </UI.Stack>
    );
}

export default MainPage;
