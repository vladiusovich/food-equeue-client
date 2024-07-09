import typography from "@typography";
import UI from "@ui";
import React from "react";
import { observer } from "mobx-react-lite";
import { Typography } from "@mui/material";
import useAppStore from "@hook/useAppStore";

const OrdersTable: React.FC = () => {
      const store = useAppStore();

      const ordersStatus = store.orders.ordersStatus;

      const inProgress = ordersStatus?.inProgress ?? [];
      const ready = ordersStatus?.ready ?? [];

      return (
            <UI.Stack direction="row" gap={1} justifyContent="space-around">

                  <UI.Stack direction="column" gap={1} >
                        <typography.h4>In progress</typography.h4>

                        <UI.Stack direction="column" gap={1} alignItems="center">
                              {inProgress.map((order) => (
                                    <typography.small key={order}>{order}</typography.small>
                              ))}
                        </UI.Stack>
                  </UI.Stack>

                  <UI.Stack direction="column" gap={1} >
                        <typography.h4>Done</typography.h4>
                        <UI.Stack direction="column" gap={1} alignItems="center">
                              {ready.map((order) => (
                                    <typography.small key={order}>{order}</typography.small>
                              ))}
                        </UI.Stack>
                  </UI.Stack>

            </UI.Stack>
      );
}
export default observer(OrdersTable);
