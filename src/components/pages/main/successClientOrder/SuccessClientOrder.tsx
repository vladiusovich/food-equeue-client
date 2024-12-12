import useAppStore from "@hook/useAppStore";
import UI from "@ui";
import { observer } from "mobx-react-lite";
import React from "react";

const SuccessClientOrder: React.FC = () => {
	const store = useAppStore();
	const readyOrders = store.orders.ordersProgress.ready ?? [];

	const isReady = readyOrders.some((order) => order.isCurrent);

	if (!isReady) {
		return null;
	}

	return (
		<UI.Paper>
			<UI.Stack direction="column" gap={1} alignItems="center">
				<UI.Typography variant="h5">Your order is ready</UI.Typography>
				<UI.Typography variant="xsmall">Please pick up your order at the pick-up location</UI.Typography>
			</UI.Stack>
		</UI.Paper>
	);
}

export default observer(SuccessClientOrder);
