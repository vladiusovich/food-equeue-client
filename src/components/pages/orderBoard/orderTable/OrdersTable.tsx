import UI from "@ui";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import useAppStore from "@hook/useAppStore";
import OrdersColumn from "./ordersColumn/OrdersColumn";
import OrderItem from "./orderItem/OrderItem";

const OrdersTable: React.FC = () => {
    const store = useAppStore();

    useEffect(() => {
        store.orders.fetch();
    }, [store.orders]);

    const ordersStatus = store.orders.ordersProgress;

    return (
        <UI.Paper>
            <UI.Grid container spacing={1}>
                <UI.Grid xs={6}>
                    <OrdersColumn title="In progress">
                        {ordersStatus.inProgress.map((order) => (
                            <OrderItem key={order.id} value={order.id} isCurrent={order.isCurrent} />
                        ))}
                    </OrdersColumn>
                </UI.Grid>

                <UI.Grid xs={6}>
                    <OrdersColumn title="Done">
                        {ordersStatus.ready.map((order) => (
                            <OrderItem key={order.id} value={order.id} isCurrent={order.isCurrent} />
                        ))}
                    </OrdersColumn>
                </UI.Grid>
            </UI.Grid>
        </UI.Paper>
    );
}

export default observer(OrdersTable);
