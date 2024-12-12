import UI from "@ui";
import React from "react";
import ClientInfo from "../main/clientInfo/ClientInfo";
import OrdersTable from "./orderTable/OrdersTable";
import BranchInfo from "../main/branchInfo/BranchInfo";
import ClientOrderReady from "../main/clientOrderReady/ClientOrderReady";

const OrdersBoardPage: React.FC = () => {
    return (
        <UI.Stack direction="column" gap={1.5}>
            <BranchInfo />
            <ClientInfo />
            <ClientOrderReady />
            <OrdersTable />
        </UI.Stack>
    );
}

export default OrdersBoardPage;
