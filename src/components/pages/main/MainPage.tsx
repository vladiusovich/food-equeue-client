import UI from "@ui";
import React from "react";
import BranchInfo from "./branchInfo/BranchInfo";
import QueueInfo from "./queueInfo/QueueInfo";
import ClientInfo from "@common/clientInfo/ClientInfo";
import ExecutionTimeInfo from "./executionTimeInfo/ExecutionTimeInfo";

const MainPage: React.FC = () => {
      return (
            <UI.Stack direction="column" gap={1}>
                  <BranchInfo />
                  <QueueInfo />
                  <ClientInfo />
                  <ExecutionTimeInfo />
            </UI.Stack>
      );
}

export default MainPage;
