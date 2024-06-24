import typography from "@typography";
import UI from "@ui";
import React from "react";

const OrderBoardPage: React.FC = () => {
      return (
            <UI.Stack direction="column" gap={1}>
                  <typography.bold>OrdersWatcher</typography.bold>
                  <UI.Skeleton />
            </UI.Stack>
      );
}

export default OrderBoardPage;
