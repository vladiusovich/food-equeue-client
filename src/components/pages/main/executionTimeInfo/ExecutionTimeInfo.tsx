import useAppStore from "@hook/useAppStore";
import typography from "@typography";
import UI from "@ui";
import { observer } from "mobx-react-lite";
import React from "react";
import S from "./ExecutionTimeInfo.styled";

// TODO: Refactor:
// Extract to a separate component
// layout shifting when data is loaded problem
// add skeleton for waiting time
const ExecutionTimeInfo: React.FC = () => {
	const store = useAppStore();

	const time = store.orders.executionTime.time;

	return (
		<UI.Stack direction="column" gap={3} alignItems="center">
			<typography.small>Average waiting time</typography.small>

			<UI.Stack direction="row" gap={3} alignItems="center" >
				<S.waitngIcon fontSize="small" />

				<UI.Stack direction="column" gap={0.5}>
					<UI.Stack direction="row" gap={1} alignItems="baseline">
						{
							time === null
								? (
									<typography.h5>Waiting...</typography.h5>
								)
								: (
									<>
										<typography.h2>{time}</typography.h2>
										<typography.h5>min</typography.h5>
									</>
								)
						}
					</UI.Stack>

				</UI.Stack>
			</UI.Stack>
		</UI.Stack>
	);
}

export default observer(ExecutionTimeInfo);
