import useAppStore from "@hook/useAppStore";
import typography from "@typography";
import UI from "@ui";
import { observer } from "mobx-react-lite";
import React from "react";

const ExecutionTimeInfo: React.FC = () => {
	const store = useAppStore();

	const time = store.orders.executionTime.time;

	return (
		<UI.Stack direction="column" gap={3} alignItems="center">
			<typography.small>Average waiting time</typography.small>
			<UI.Stack direction="row" gap={1} alignItems="center" >
				<UI.CircularProgress size="6rem" thickness={2.5} />
				<UI.Stack direction="column" gap={0.5}>
					<UI.Stack direction="row" gap={1} alignItems="baseline">
						<typography.h1>{time}</typography.h1>
						<typography.h5>min</typography.h5>
					</UI.Stack>
				</UI.Stack>
			</UI.Stack>
		</UI.Stack>
	);
}

export default observer(ExecutionTimeInfo);
