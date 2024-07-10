import UI from "@ui";
import React from "react";
import { observer } from "mobx-react-lite";
import useAppStore from "@hook/useAppStore";
import OrderItem from "./orderItem/OrderItem";
import OrdersColumn from "./ordersColumn/OrdersColumn";

const OrdersTable: React.FC = () => {
      const store = useAppStore();

      const ordersStatus = store.orders.ordersProgress;

      return (
            <UI.Stack direction="row" gap={1} justifyContent="space-evenly">
                  <OrdersColumn title="In progress">
                        {ordersStatus.inProgress.map((order) => (
                              <OrderItem key={order.id} value={order.id} isCurrent={order.isCurrent} />
                        ))}
                  </OrdersColumn>

                  <OrdersColumn title="Done">
                        {ordersStatus.ready.map((order) => (
                              <OrderItem key={order.id} value={order.id} isCurrent={order.isCurrent} />
                        ))}
                  </OrdersColumn>
            </UI.Stack>
      );
}

export default observer(OrdersTable);
