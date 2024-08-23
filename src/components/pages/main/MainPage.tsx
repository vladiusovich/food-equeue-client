import UI from "@ui";
import React from "react";
import useAppStore from "@hook/useAppStore";
import BranchInfo from "./branchInfo/BranchInfo";
import QueueInfo from "./queueInfo/QueueInfo";
import ClientInfo from "./clientInfo/ClientInfo";
import ExecutionTimeInfo from "./executionTimeInfo/ExecutionTimeInfo";
import SuccessClientOrder from "./successClientOrder/SuccessClientOrder";
import { observer } from "mobx-react-lite";

const MainPage: React.FC = () => {
    const store = useAppStore();

    const readyOrders = store.orders.ordersProgress.ready ?? [];

    const isReady = readyOrders.some((order) => order.isCurrent);

    return (
        <UI.Stack direction="column" gap={3}>
            <BranchInfo />
            <UI.Divider variant="middle" />

            <QueueInfo />
            <UI.Divider variant="middle" />

            <ClientInfo />
            <UI.Divider variant="middle" />

            {isReady ? <SuccessClientOrder /> : <ExecutionTimeInfo />}
        </UI.Stack>
    );
}

export default observer(MainPage);
