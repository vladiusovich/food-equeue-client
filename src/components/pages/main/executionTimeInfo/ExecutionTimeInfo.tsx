import useAppStore from "@hook/useAppStore";
import UI from "@ui";
import { observer } from "mobx-react-lite";
import React from "react";

// TODO: Refactor:
// Extract to a separate component
// layout shifting when data is loaded problem
// add skeleton for waiting time
const ExecutionTimeInfo: React.FC = () => {
	const store = useAppStore();

	const time = store.orders.executionTime.time;

	return (
		<UI.Paper>
			<UI.Stack direction="column" gap={1} >
				<UI.Typography variant="xxsmall">Average waiting time</UI.Typography>

				<UI.Grid container spacing={2} width="100%">
					<UI.Grid xs={12}>
						<UI.Stack direction="row" gap={0.2} alignItems="baseline">
							{
								time === null
									? (
										<UI.Typography variant="bold">Calculating...</UI.Typography>
									)
									: (
										<>
											<UI.Typography variant="bold">{time}</UI.Typography>
											<UI.Typography variant="xxsmall">min</UI.Typography>
										</>
									)
							}
						</UI.Stack>
					</UI.Grid>
				</UI.Grid>
			</UI.Stack>
		</UI.Paper>
	);
}

export default observer(ExecutionTimeInfo);
