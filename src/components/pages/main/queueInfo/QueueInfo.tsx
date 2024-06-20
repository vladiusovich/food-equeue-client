import UI from "@ui";
import React, { useState } from "react";
import QueueItem from "./QueueItem/QueueItem";
import useSocket from "@hook/useSocket";
import OrdersStatus from "@type/orders/OrdersStatus";
import QueueInfoSkeleton from "./QueueInfoSkeleton";

const QueueInfo: React.FC = () => {
	const [status, setStatus] = useState<OrdersStatus | null>(null);

	const { isConnected, setListner } = useSocket();

	const handleUpdate = (event: OrdersStatus) => {
		setStatus({ ...event })
	}

	setListner("customer.orders.updated", handleUpdate);

	const inProgress = status?.inProgress?.length ?? 0;
	const ready = status?.ready?.length ?? 0;

	if (!isConnected || status === null) {
		return (
			<QueueInfoSkeleton />
		);
	}

	return (
		<UI.Stack direction="column" gap={2}>
			<UI.Stack direction="row" gap={1} justifyContent="space-around">
				<UI.Stack direction="column" gap={1}>
					<QueueItem title="Count:" value={inProgress + ready} />
					<QueueItem title="In progress:" value={inProgress} />
				</UI.Stack>
				<UI.Stack direction="column" gap={1}>
					<QueueItem title="Ready:" value={ready} />
				</UI.Stack>
			</UI.Stack>

			<UI.Button variant="outlined" color="primary">
				Online board
			</UI.Button>
		</UI.Stack>
	);
}

export default QueueInfo;
