import UI from "@ui";
import React from "react";
import ClientInfo from "../main/clientInfo/ClientInfo";
import OrdersTable from "./orderTable/OrdersTable";

const OrdersBoardPage: React.FC = () => {
    return (
        <UI.Stack direction="column" gap={1}>
            <ClientInfo />
            <UI.Divider variant="middle" />
            <OrdersTable />
        </UI.Stack>
    );
}

export default OrdersBoardPage;
