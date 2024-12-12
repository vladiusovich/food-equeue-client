import useAppStore from "@hook/useAppStore";
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
			<UI.Typography variant="small">Average waiting time</UI.Typography>

			<UI.Stack direction="row" gap={3} alignItems="center" >
				<S.waitngIcon fontSize="small" />

				<UI.Stack direction="column" gap={0.5}>
					<UI.Stack direction="row" gap={1} alignItems="baseline">
						{
							time === null
								? (
									<UI.Typography variant="h5">Waiting...</UI.Typography>
								)
								: (
									<>
										<UI.Typography variant="h2">{time}</UI.Typography>
										<UI.Typography variant="h5">min</UI.Typography>
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
