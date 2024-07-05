import UI from "@ui";
import React from "react";
import BranchInfo from "./branchInfo/BranchInfo";
import QueueInfo from "./queueInfo/QueueInfo";
import ClientInfo from "./clientInfo/ClientInfo";
import ExecutionTimeInfo from "./executionTimeInfo/ExecutionTimeInfo";

const MainPage: React.FC = () => {
    return (
        <UI.Stack direction="column" gap={4}>
            <BranchInfo />
            <UI.Divider variant="middle" />

            <QueueInfo />

            <ClientInfo />
            <UI.Divider variant="middle" />

            <ExecutionTimeInfo />
        </UI.Stack>
    );
}

export default MainPage;
