import UI from "@ui";
import React, { useEffect } from "react";
import QueueItem from "./QueueItem/QueueItem";
import QueueInfoSkeleton from "./QueueInfoSkeleton";
import useAppStore from "@hook/useAppStore";
import { observer } from "mobx-react-lite";

const QueueInfo: React.FC = () => {
	const store = useAppStore();

	useEffect(() => {
		store.orders.fetch();
	}, [store.orders]);

	if (!store.orders.ordersProgress) {
		return (
			<QueueInfoSkeleton />
		);
	}

	const ordersStatus = store.orders.ordersProgress;

	const inProgress = ordersStatus?.inProgress?.length ?? 0;
	const ready = ordersStatus?.ready?.length ?? 0;

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
		</UI.Stack>
	);
}

export default observer(QueueInfo);
