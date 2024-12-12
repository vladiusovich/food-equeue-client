import UI from "@ui";
import React, { useEffect } from "react";
import QueueItem from "./QueueItem/QueueItem";
import QueueInfoSkeleton from "./QueueInfoSkeleton";
import useAppStore from "@hook/useAppStore";
import { observer } from "mobx-react-lite";
import ExecutionTimeInfo from "../executionTimeInfo/ExecutionTimeInfo";

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
		<UI.Grid container spacing={1}>
			<UI.Grid xs={12}>
				<ExecutionTimeInfo />
			</UI.Grid>

			<UI.Grid xs={6}>
				<UI.Paper>
					<QueueItem title="Count:" value={inProgress + ready} />
				</UI.Paper>
			</UI.Grid>

			<UI.Grid xs={6}>
				<UI.Paper>
					<QueueItem title="In progress:" value={inProgress} />
				</UI.Paper>
			</UI.Grid>

			<UI.Grid xs={12}>
				<UI.Paper>
					<QueueItem title="Ready:" value={ready} />
				</UI.Paper>
			</UI.Grid>
		</UI.Grid>
	);
}

export default observer(QueueInfo);
