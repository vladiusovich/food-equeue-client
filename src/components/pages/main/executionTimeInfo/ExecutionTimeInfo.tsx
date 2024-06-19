import typography from "@typography";
import UI from "@ui";
import React from "react";

const ExecutionTimeInfo: React.FC = () => {
	return (
		<UI.Stack direction="column" gap={3} alignItems="center">
			<typography.small>Average waiting time</typography.small>
			<UI.Stack direction="row" gap={1} alignItems="center" >
				<UI.CircularProgress size="6rem" thickness={2.5} />
				<UI.Stack direction="column" gap={0.5}>
					<UI.Stack direction="row" gap={1} alignItems="baseline">
						<typography.h1>5</typography.h1>
						<typography.h5>min</typography.h5>
					</UI.Stack>
				</UI.Stack>
			</UI.Stack>
		</UI.Stack>
	);
}

export default ExecutionTimeInfo;
